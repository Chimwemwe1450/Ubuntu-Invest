import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor(private platform:Platform ,private router: Router) { }

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
