import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/Main.service';
import { UserSavedService } from '../shared/UserSavedID.service';
import { Router } from '@angular/router';
import { ProfileCompletionService } from '../shared/ProfileCompletionService.service';
import { UsersLoginService } from '../shared/UserLoginSaved.service';
@Component({

  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.page.html',
  styleUrls: ['./risk-assessment.page.scss'],
})
export class RiskAssessmentPage implements OnInit {
  riskForm: FormGroup;
  question1Options = [
    { answerId: 2, freeAnswer: 'Employed' },
    { answerId: 3, freeAnswer: 'Self-employed' },
    { answerId: 4, freeAnswer: 'Student' },
    { answerId: 5, freeAnswer: 'Retired' },
    { answerId: 6, freeAnswer: 'Unemployed' }
  ];
  private userIdRegistration: any;
  private userIDLogin : any;
  constructor(private fb: FormBuilder,   private UserLogin: UsersLoginService,private userService: UserService , private UserId: UserSavedService ,private router: Router , private profileCompletionService: ProfileCompletionService) {
    this.riskForm = this.fb.group({
      question1: ['', Validators.required]
    });
  }
  NavigateHomePage(){

    this.router.navigate(['/home']);
  }
  submit() {
this.userIdRegistration= this.UserId.getUserId();
this.userIDLogin  = this.UserLogin.getUserId()
    if (this.userIdRegistration) {
      this.userIdRegistration= this.UserId.getUserId(); 
      const question1Value = this.riskForm.get('question1')!.value; 
      const userId = this.userIdRegistration; 
      const questionId = 1;
      const answerId = question1Value.answerId;
      const freeAnswer = question1Value.freeAnswer;
      this.router.navigate(['/step-one']);
      this.profileCompletionService.updateChecklist('employmentStatus', true);
      this.userService.submitAnswer(userId, questionId, answerId, freeAnswer).subscribe({
   
      });
    } else if (this.userIDLogin) {
      this.userIDLogin =  this.UserLogin.getUserId(); 
      const question1Value = this.riskForm.get('question1')!.value; 
      const userId = this.userIDLogin; 
      const questionId = 1;
      const answerId = question1Value.answerId;
      const freeAnswer = question1Value.freeAnswer;
      this.router.navigate(['/step-one']);
      this.profileCompletionService.updateChecklist('employmentStatus', true);
      this.userService.submitAnswer(userId, questionId, answerId, freeAnswer).subscribe({
      
      });
    
    }
  }
  
  ngOnInit() {
  }
}