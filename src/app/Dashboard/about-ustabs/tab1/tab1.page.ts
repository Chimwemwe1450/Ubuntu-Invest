import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private platform:Platform ,private router: Router) { 
    this.setupBackButton();
  }

  ngOnInit() {
  }
  setupBackButton() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.router.url !== '/login') {
        this.router.navigate([this.router.url]); 
        return;
      }
    });
  }
}
