// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageServce {
  private readonly USER_IMAGE_KEY = 'userImage';

  getUserImage(): string | null {
    return localStorage.getItem(this.USER_IMAGE_KEY);
  }

  setUserImage(userImage: string): void {
    localStorage.setItem(this.USER_IMAGE_KEY, userImage);
  }

  clearUserImage(): void {
    localStorage.removeItem(this.USER_IMAGE_KEY);
  }
}
