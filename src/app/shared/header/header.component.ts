import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageTitle: string = '';
  isHomePage: boolean = true;

  private pageTitleMapping: { [key: string]: string } = {
    '/trade-history':'History',
    '/home/tab4':'Home',
    '/home/tab1':'Home',
    '/home/tab2':'Home',
    '/home/tab3':'Home',
    '/trading/tab1': 'Trading',
    '/trading/tab2': 'Trading',
    '/trading/tab3': 'Trading',
    '/home': 'Home',
    '/profile/tab1': 'Profile',
    '/profile/tab2': 'Profile',
    '/tools/tab1': 'Tools',
    '/trading': 'Trading',
    '/contact': 'Contact',
    '/about-us/tab1': 'About',
    '/tools/tab2': 'Tools',
    '/about-us/tab2': 'About',
    '/withdrawal': 'Withdrawal',
    '/deposit': 'Deposit',
    '/login': 'Home',
  };

  constructor(private router: Router) {
    // Listen to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        this.updatePageTitle(currentUrl);
      }
    });
  }

  ngOnInit(): void {
    // Check if the initial page is the home page
    this.isHomePage = this.router.url === '/home/tab1';
  }

  updatePageTitle(url: string): void {
    this.pageTitle = this.pageTitleMapping[url] || 'Default Title';
    
    // If the current page is not the home page, hide the title
    if (url !== '/home/tab1') {
      this.isHomePage = false;
    }
  }
}
