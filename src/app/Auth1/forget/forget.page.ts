import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/Main.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  username= '';
  showMessage: boolean = false;
  message: string = '';
  constructor(  private  User:UserService) {

  }


  makeRequest() {
    this.User.makeForgetpassword(this.username).subscribe(
      (data) => {
  
        this.showMessage = true;
        this.message = 'Reset Password Email sent'; 
      },
      (error) => {
        // Handle errors
        console.error(error);
        this.showMessage = true;
        this.message = 'Reset Password Email failed to send'; 
      }
    );
  }
  ngOnInit() {}


}
