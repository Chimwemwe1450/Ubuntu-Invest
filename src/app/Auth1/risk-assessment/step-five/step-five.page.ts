import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileCompletionService } from '../../shared/ProfileCompletionService.service';
import { Router } from '@angular/router';
import { UserSavedService } from '../../shared/UserSavedID.service';
import { UserService } from '../../shared/Main.service';
import { UsersLoginService } from '../../shared/UserLoginSaved.service';
@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.page.html',
  styleUrls: ['./step-five.page.scss'],
})
export class StepFivePage implements OnInit {
  riskForm: FormGroup;
  question5Options = [
    { answerId: 33, freeAnswer: 'Speculate to accumulate' },
    { answerId: 34, freeAnswer: 'Earn additional income' },
    { answerId: 35, freeAnswer: 'Hedging only' },
    { answerId: 36, freeAnswer: 'Become full-time trader' },
    { answerId: 37, freeAnswer: 'Grow retirement fund' },
    { answerId: 38, freeAnswer: 'Want luxury lifestyle' },
  ];
  private userIdRegistration: any;
  constructor(private fb: FormBuilder,   private UserLogin: UsersLoginService,private userService: UserService , private UserId: UserSavedService ,private router: Router , private profileCompletionService: ProfileCompletionService) {
    this.riskForm = this.fb.group({
      question5: ['', Validators.required]
    });
  }
  private userIDLogin : any;
  NavigateHomePage(){

    this.router.navigate(['/home']);
  }
  submit() {
    this.userIdRegistration= this.UserId.getUserId();
    this.userIDLogin  = this.UserLogin.getUserId()
        if (this.userIdRegistration) {
          this.userIdRegistration= this.UserId.getUserId(); 
          const question5Value = this.riskForm.get('question5')!.value; 
          const userId = this.userIdRegistration; 
          const questionId = 6;
          const answerId = question5Value.answerId;
          const freeAnswer = question5Value.freeAnswer;
          this.router.navigate(['/home']);
          this.profileCompletionService.updateChecklist('trade', true);
          this.userService.submitAnswer(userId, questionId, answerId, freeAnswer).subscribe({
     
          });
        } else if (this.userIDLogin) {
          this.userIDLogin =  this.UserLogin.getUserId(); 
          const question5Value = this.riskForm.get('question5')!.value; 
          const userId = this.userIDLogin; 
          const questionId = 6;
          const answerId = question5Value.answerId;
          const freeAnswer = question5Value.freeAnswer;
          this.router.navigate(['/home']);
          this.profileCompletionService.updateChecklist('trade', true);
          this.userService.submitAnswer(userId, questionId, answerId, freeAnswer).subscribe({
           
          });
        
        }
      }
  
  ngOnInit() {
  }
}