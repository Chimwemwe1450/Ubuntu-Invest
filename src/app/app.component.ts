import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public showHeader: boolean = true;

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return (
      this.router.url === '/login' ||
      this.router.url === '/risk-assessment' ||
      this.router.url === '/step-one' ||
      this.router.url === '/step-two' ||
      this.router.url === '/step-three' ||
      this.router.url === '/step-four' ||
      this.router.url === '/step-five' ||
     this.router.url === '/registration' ||
      this.router.url === '/forget' ||
      this.router.url === '/forget-password-email-template' ||
      this.router.url === '/reset-password'
    );
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !this.isLoginPage();
      }
    });

    // Subscribe to the onLoginSuccess event

  }
}