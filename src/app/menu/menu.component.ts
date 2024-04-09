
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Auth1/shared/Main.service';
import { UsersService } from '../Auth1/shared/UsernameSaved.service';
import { ImageServce } from 'src/app/Auth1/shared/Image.service'
import { UsernameStorageService } from '../Auth1/shared/UsernameStorage.service';
import { UserSavedService } from '../Auth1/shared/UserSavedID.service';
import { MenuController } from '@ionic/angular';

import { GetFirstName } from '../Auth1/shared/GetFirstName.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  selectedItem: string = '';
  username: string = '';
  usernameLoggin: string = '';  
  public userDetails: any; 
  public surname!: string;
  public name!: string;
  constructor(private router: Router,
    private GetFirstName:GetFirstName, 
    private userService: UserService, 
    private userStorage: UsersService ,
    public ImageStorage:ImageServce , 
    public user:UserService,
    public UsernameStorage:UsernameStorageService ,
     public UserSavedSevce:UserSavedService,private menuController: MenuController)  {}

  ngOnInit() {
    this.username = this.userStorage.getUsername();
    this.fetchUserDetails();
    this.usernameLoggin = this.userStorage.getUsername();
 
    this.GetFirstName.userDetailsUpdated.subscribe(userDetails => {
      this.name= userDetails.firstName;
    });
  }
  closeMenu() {

    this.menuController.close();
  }

  selectItem(item: string) {
    this.selectedItem = item;

    if (item === 'Contact Us') {
      this.router.navigate(['/contact']);
    } else if (item === 'About Us') {
      this.router.navigate(['/about-us/tab1']);
      
    } else if (item === 'Logout') {
      this.userService.logout();
      this.router.navigate(['/login']);
    } else if (item === 'MT5 for desktop') {
      // Navigate to an external URL
      window.location.href = 'https://www.ubuntuinvest.com/platforms/mt5-web-trader/';
    } else if (item === 'Forex') {
      this.router.navigate(['/trading/tab1']);
  
    }  else if (item === 'Indices') {
      this.router.navigate(['/trading/tab3']);
  
    }
    else if (item === 'Shares') {
      this.router.navigate(['/trading/tab2']);
  
    }  else if (item === 'Economic calendar') {
      this.router.navigate(['/tools/tab1']);
  
    }else if (item === 'Forex') {
      this.router.navigate(['/trading/tab1']);
  
    }
    else if (item === 'Indices') {
      this.router.navigate(['/trading/tab3']);
  
    }
    this.closeMenu();
  }
  fetchUserDetails(): void {
    this.user.postUserLoggin().subscribe(
      (data) => {
        this.userDetails = data;
        this.name = this.userDetails.entity.firstName
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }
}
