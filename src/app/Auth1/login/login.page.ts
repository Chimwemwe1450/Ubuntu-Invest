import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router , NavigationEnd  } from '@angular/router';
import { UserService } from '../shared/Main.service';
import { UsersService } from '../shared/UsernameSaved.service';
import { UsersLoginService } from '../shared/UserLoginSaved.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  rememberMe = false;
  passwordFieldType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private userStorage: UsersService,
    private userLogin: UsersLoginService
  ) {   this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
  
      this.clearFields();
    }
  });}

  ngOnInit() {}

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  verifyUser() {
    this.userService.verifyUser(this.username, this.password).subscribe(
      (response) => {
        const userId = response.userId;
        this.userStorage.setUsername(this.username);
        this.userLogin.setUserId(userId);
        this.clearFields();
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error:', error);
        alert('Username or password is invalid');
      }
    );
  }

  logout() {
    this.clearFields();
    this.router.navigate(['/login']);
  }

  forgetpassword() {
    this.clearFields();
    this.router.navigate(['/forget']);
  }

  clearFields() {
    this.username = '';
    this.password = '';
  }
}
