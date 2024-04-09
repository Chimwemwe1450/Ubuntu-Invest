import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { UsersLoginService } from './UserLoginSaved.service';
import { UserSavedService } from './UserSavedID.service';
@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate {
 
userIdRegistration:any;
userIdLogin:any;
  constructor( private UserSavedService:UserSavedService ,  private UsersLoginService :UsersLoginService , private router: Router) {}

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
    
        this.userIdRegistration= this.UserSavedService.getUserId(); 
        this.userIdLogin  = this.UsersLoginService .getUserId()
      if ( this.userIdLogin) {
        observer.next(true);
        observer.complete();
      } else if ( this.userIdRegistration){
        observer.next(true);
        observer.complete();
      }else{
        this.router.navigate(['/login']);
        observer.next(false);
        observer.complete();
      }
    });
  }
}
