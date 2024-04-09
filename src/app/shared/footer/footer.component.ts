import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  currentRoute: string;

  constructor(
    private router: Router
  ) {
    this.currentRoute = this.router.url;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit() {}

  public navigate(route: string): void {
    this.router.navigateByUrl(route, { replaceUrl: true }).then();
  }

  // Define the isCurrentRoute function here
  public isCurrentRoute(route: string): boolean {
    return this.currentRoute === route;
  }

}
