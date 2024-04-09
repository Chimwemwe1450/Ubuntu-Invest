import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Import BehaviorSubject
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UsersLoginService } from './UserLoginSaved.service';
import { UserService } from './Main.service';

interface ChecklistState {
  employmentStatus: boolean;
  education: boolean;
  onlineTrading: boolean;
  monthlyIncome: boolean;
  expectations: boolean;
  trade: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileCompletionService {
  private readonly STORAGE_PREFIX = 'profile_completion_state_';
  private ngUnsubscribe = new Subject<void>();

  public checklistState = new BehaviorSubject<ChecklistState>({
    employmentStatus: false,
    education: false,
    onlineTrading: false,
    monthlyIncome: false,
    expectations: false,
    trade: false,
  });

  checklistState$ = this.checklistState.asObservable();

  constructor(private userLogin: UsersLoginService, private userService: UserService) {
    this.loadStateFromStorage();
    this.updateProfileCompletionWithRisk();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private loadStateFromStorage() {
    const userId = this.userLogin.getUserId();
    const storedState = localStorage.getItem(this.getStorageKey(userId));
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      this.checklistState.next(parsedState);
    }
  }

  private saveStateToStorage(userId: string, state: ChecklistState) {
    localStorage.setItem(this.getStorageKey(userId), JSON.stringify(state));
  }

  isProfileComplete(): boolean {
    const currentState = this.checklistState.getValue();
    return Object.values(currentState).every(status => status);
  }

  updateChecklist(item: keyof ChecklistState, status: boolean) {
    const currentState = this.checklistState.getValue();
    currentState[item] = status;
    this.checklistState.next(currentState);
    const userId = this.userLogin.getUserId();
    this.saveStateToStorage(userId, currentState);
  }

  private getStorageKey(userId: string): string {
    return `${this.STORAGE_PREFIX}${userId}`;
  }

  updateProfileCompletionWithRisk(): void {
    this.userService.GetRiskForUser()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((response: any) => {
        const userAnswers = response.user_answers;
        const requiredQuestions = [1, 3, 4, 5, 6, 7];
        const isProfileCompleted = requiredQuestions.every(questionId =>
          userAnswers.some((answer: { questionId: string }) => answer.questionId === questionId.toString())
        );

        if (isProfileCompleted) {
          const currentState = this.checklistState.getValue();
          currentState.employmentStatus = true;
          currentState.education = true;
          currentState.onlineTrading = true;
          currentState.monthlyIncome = true;
          currentState.expectations = true;
          currentState.trade = true;
          this.checklistState.next(currentState);
          const userId = this.userLogin.getUserId();
          this.saveStateToStorage(userId, currentState);
        }
      });
  }
}
