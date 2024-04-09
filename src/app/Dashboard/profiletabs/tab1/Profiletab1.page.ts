import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileCompletionService } from 'src/app/Auth1/shared/ProfileCompletionService.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UsersLoginService } from 'src/app/Auth1/shared/UserLoginSaved.service';
import { UserService } from 'src/app/Auth1/shared/Main.service';
@Component({
  selector: 'app-tab1',
  templateUrl: './Profiletab1.page.html',
  styleUrls: ['./Profiletab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  checklist = [
    { label: 'Employment status', completed: false, route: '/risk-assessment' },
    { label: 'Education', completed: false, route: '/step-one' },
    { label: 'Online Trading', completed: false, route: '/step-two' },
    { label: 'Total Monthly Income', completed: false, route: '/step-three' },
    { label: 'Expectations', completed: false, route: '/step-four' },
    { label: 'Trade', completed: false, route: '/step-five' },
  ];
  isCompletedMessageDisplayed = false;

  constructor(
    private userLogin: UsersLoginService,
    private profileCompletionService: ProfileCompletionService,
    private router: Router,
    private UserService:UserService 
  ) {}

  ngOnInit() {
    this.loadProfileCompletionState();
    this.profileCompletionService.checklistState$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(state => {
        this.updateChecklistState(state);
        this.saveProfileCompletionState();
        if (this.isCompleted && !this.isCompletedMessageDisplayed) {
          this.displayCompletionMessage();
        }
      });
  if (this.isCompleted) {
    this.isCompletedMessageDisplayed = true;
  } else {

    this.UserService.GetRiskForUser()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((response: any) => {
        const userAnswers = response.user_answers;
        const requiredQuestions = [1, 3, 4, 5, 6, 7];
        const isProfileCompleted = requiredQuestions.every(questionId =>
          userAnswers.some((answer: { questionId: string }) => answer.questionId === questionId.toString())
        );

        if (isProfileCompleted) {
          // Update checklist items and display completion message
          this.checklist.forEach(item => item.completed = true);
          this.saveProfileCompletionState();
          this.displayCompletionMessage();
        }
      });
  }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  loadProfileCompletionState() {
    const userId = this.userLogin.getUserId(); 

    const savedState = JSON.parse(localStorage.getItem(`profileCompletion-${userId}`) || '[]');
    this.checklist.forEach(item => {
      const savedItem = savedState.find((stateItem: any) => stateItem.label === item.label);
      item.completed = savedItem ? savedItem.completed : false;
    });
  }

  saveProfileCompletionState() {
    const userId = this.userLogin.getUserId(); 
    if (userId) {
      localStorage.setItem(`profileCompletion-${userId}`, JSON.stringify(this.checklist));
    } else {
      console.error('No user ID found. Unable to save profile completion state.');
    }
  }

  updateChecklistState(state: any) {
    this.checklist[0].completed = state.employmentStatus;
    this.checklist[1].completed = state.education;
    this.checklist[2].completed = state.onlineTrading;
    this.checklist[3].completed = state.monthlyIncome;
    this.checklist[4].completed = state.expectations;
    this.checklist[5].completed = state.trade;
  }

  toggleCompletion(index: number): void {
    this.checklist[index].completed = !this.checklist[index].completed;
    this.saveProfileCompletionState(); 
  }

  getCompletionPercentage(): number {
    const completedItems = this.checklist.filter(item => item.completed).length;
    return Math.round((completedItems / this.checklist.length) * 100);
  }

  get isCompleted(): boolean {
    
    return this.checklist.every(item => item.completed);
  }

  findFirstIncompleteSection(): string | null {
    const firstIncompleteItem = this.checklist.find(item => !item.completed);
    return firstIncompleteItem ? firstIncompleteItem.route : null;
  }

  navigateToSection(route: string | null): void {
    if (route) {
      this.router.navigateByUrl(route);
    }
  }

  completeProfile(): void {
    const userId = this.userLogin.getUserId(); 
    if (userId){
      this.checklist.forEach(item => item.completed = true);
      this.saveProfileCompletionState();
      this.displayCompletionMessage();

    }else{
      
    }
    
  }

  displayCompletionMessage(): void {
    this.isCompletedMessageDisplayed = true;
  }
}
