import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit {


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
