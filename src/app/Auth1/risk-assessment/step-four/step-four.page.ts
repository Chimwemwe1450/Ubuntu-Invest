import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/Main.service';
import { UserSavedService } from '../../shared/UserSavedID.service';
import { Router } from '@angular/router';
import { ProfileCompletionService } from '../../shared/ProfileCompletionService.service';
import { UsersLoginService } from '../../shared/UserLoginSaved.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.page.html',
  styleUrls: ['./step-four.page.scss'],
})
export class StepFourPage implements OnInit {
  riskForm: FormGroup;
  private userIdRegistration: any;
  question4Options: { answerId: number, freeAnswer: string }[] = [];
  private userIDLogin : any;
  constructor(private fb: FormBuilder, private http: HttpClient ,   private UserLogin: UsersLoginService,private userService: UserService , private UserId: UserSavedService ,private router: Router , private profileCompletionService: ProfileCompletionService) {
    this.riskForm = this.fb.group({
      question4: ['', Validators.required]
    });

   }
   getRisk() {
    this.userService.GetRiskassessment().subscribe(
      (response) => {
        const riskAssessmentData = response.questions_with_answers;
        const targetQuestionIds = ['5']; 
  
     
        this.question4Options = [];
  
        for (const questionId of targetQuestionIds) {
          if (riskAssessmentData.hasOwnProperty(questionId)) {
            const question = riskAssessmentData[questionId];
            for (const answerId in question.answers) {
              if (question.answers.hasOwnProperty(answerId)) {
                const answer = question.answers[answerId];
                const parsedAnswerId = parseInt(answerId, 10);
                this.question4Options.push({ answerId: parsedAnswerId, freeAnswer: answer.answer });
              }
            }
          }
        }
  

      },
      (error) => {
      console.log(error)
      }
    );
  }
  
  
   NavigateHomePage(){

    this.router.navigate(['/home']);
  }
  submit() {
    this.userIdRegistration= this.UserId.getUserId();
    this.userIDLogin  = this.UserLogin.getUserId()
        if (this.userIdRegistration) {
          this.userIdRegistration= this.UserId.getUserId(); 
          const question4Value = this.riskForm.get('question4')!.value; 
          const userId = this.userIdRegistration; 
          const questionId = 5;
          const answerId = question4Value.answerId;
          const freeAnswer = question4Value.freeAnswer;
          this.router.navigate(['/step-five']);
          this.profileCompletionService.updateChecklist('expectations', true);
          this.userService.submitAnswer(userId, questionId, answerId, freeAnswer).subscribe({
 
          });
        } else if (this.userIDLogin) {
          this.userIDLogin =  this.UserLogin.getUserId(); 
          const question4Value = this.riskForm.get('question4')!.value; 
          const userId = this.userIDLogin; 
          const questionId = 5;
          const answerId = question4Value.answerId;
          const freeAnswer = question4Value.freeAnswer;
          this.router.navigate(['/step-five']);
          this.profileCompletionService.updateChecklist('expectations', true);
          this.userService.submitAnswer(userId, questionId, answerId, freeAnswer).subscribe({
        
          });
        
        }
      }
  
  
  ngOnInit() {
    this.getRisk()
  }

}
