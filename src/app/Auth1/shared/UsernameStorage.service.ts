import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameStorageService {
  private usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  username$: Observable<string> = this.usernameSubject.asObservable();

  private userIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  userId$: Observable<number | null> = this.userIdSubject.asObservable();

  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }

  setUserId(userId: number): void {
    this.userIdSubject.next(userId);
  }

  getUsername(): string {
    return this.usernameSubject.value;
  }

  getUserId(): number | null {
    return this.userIdSubject.value;
  }
}
