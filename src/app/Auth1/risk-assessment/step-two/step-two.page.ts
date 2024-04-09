import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/Main.service';
import { UserSavedService } from '../../shared/UserSavedID.service';
import { Router } from '@angular/router';
import { ProfileCompletionService } from '../../shared/ProfileCompletionService.service';
import { UsersLoginService } from '../../shared/UserLoginSaved.service';
@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.page.html',
  styleUrls: ['./step-two.page.scss'],
})
export class StepTwoPage implements OnInit {
  riskForm: FormGroup;
  private userIdRegistration: any;
  question2Options = [
    { answerId: 39, freeAnswer: 'Yes - under a year' },
    { answerId: 40, freeAnswer: 'Yes 1-3 years' },
    { answerId: 41, freeAnswer: 'Yes 3+ years' },
    { answerId: 42, freeAnswer: 'No' },
   
  ];
  NavigateLoginPage(){

    this.router.navigate(['/home']);
  }
  private userIDLogin : any;
  constructor(private fb: FormBuilder,   private UserLogin: UsersLoginService,private userService: UserService , private UserId: UserSavedService ,private router: Router , private profileCompletionService: ProfileCompletionService) {
    this.riskForm = this.fb.group({
      question2: ['', Validators.required]
    });
   }

   submit() {
    this.userIdRegistration= this.UserId.getUserId();
    this.userIDLogin  = this.UserLogin.getUserId()
        if (this.userIdRegistration) {
          this.userIdRegistration= this.UserId.getUserId(); 
          const question2Value = this.riskForm.get('question2')!.value; 
          const userId = this.userIdRegistration; 
          const questionId = 7;
          const answerId = question2Value.answerId;
          const freeAnswer = question2Value.freeAnswer;
          this.router.navigate(['/step-three']);
          this.profileCompletionService.updateChecklist('onlineTrading', true);
          this.userService.submitAnswer(userId, questionId, answerId, freeAnswer).subscribe({
           
          });
        } else if (this.userIDLogin) {
          this.userIDLogin =  this.UserLogin.getUserId(); 
          const question2Value = this.riskForm.get('question2')!.value; 
          const userId = this.userIDLogin; 
          const questionId = 7;
          const answerId = question2Value.answerId;
          const freeAnswer = question2Value.freeAnswer;
          this.router.navigate(['/step-three']);
          this.profileCompletionService.updateChecklist('onlineTrading', true);
          this.userService.submitAnswer(userId, questionId, answerId, freeAnswer).subscribe({
           
          });
        
        }
      }
      
  
  ngOnInit() {
  }

}
