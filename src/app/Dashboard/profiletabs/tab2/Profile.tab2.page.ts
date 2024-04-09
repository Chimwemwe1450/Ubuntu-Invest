import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Auth1/shared/UsernameSaved.service';
import { ImageServce } from 'src/app/Auth1/shared/Image.service'; // Fix typo in service import
import { UserService } from 'src/app/Auth1/shared/Main.service';
import { ToastController } from '@ionic/angular';
import { GetFirstName } from 'src/app/Auth1/shared/GetFirstName.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: './Profiletab2.page.html',
  styleUrls: ['./Profiletab2.page.scss'],
})
export class Tab2Page implements OnInit {
  username: string = '';
  currencies: any[] = [];
  currency:  string ="";
  userID:any;
  currencyID:string = '';
  countryID:string = '';
  countries: any;
  userImage: any;
  firstname:  string ="";
  lastname:  string ="";
  currencyGroup: any;
  country:string ="";
  public userDetails: any;
  public totalBalance: number | undefined;
   public name : string | undefined;
   public surname : string | undefined;
  constructor(
    private GetFirstName :GetFirstName,
    private userService: UsersService,
    private imageService: ImageServce,
    public user:UserService,
    private toastController: ToastController ,
     private platform: Platform,
     private router: Router
    ) {
  
  }


  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'User details updated successfully!',
      duration: 3000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }
  ngOnInit() {
    this.username = this.userService.getUsername();
    this.fetchUserDetails();
    this.user.getCurrenciesForRegistrationScreen().subscribe(
      (data) => {
        this.currencies = data;
      
      },
      (error) => {
        console.error('Error fetching currencies:', error);
       
      }
    );
    this.currencyGroup = [
      { name: "USD", code: "USD" },
      { name: "ZAR", code: "ZAR" },
    
  ];
  this.countries = [
    { name: "South Africa", code: "ZA", phoneCode: "+27" },
    { name: "Andorra", code: "AD", phoneCode: "+376" },
    { name: "Anguilla", code: "AI", phoneCode: "+1" },
    { name: "Australia", code: "AU", phoneCode: "+61" },
    { name: "Austria", code: "AT", phoneCode: "+43" },
    { name: "Belgium", code: "BE", phoneCode: "+32" },
    { name: "Bermuda", code: "BM", phoneCode: "+1" },
    { name: "Bhutan", code: "BT", phoneCode: "+975" },
    { name: "Burkina Faso", code: "BF", phoneCode: "+226" },
    { name: "Canada", code: "CA", phoneCode: "+1" },
    { name: "Chile", code: "CL", phoneCode: "+56" },
    { name: "Cocos", code: "CC", phoneCode: "+61" },
    { name: "Croatia", code: "HR", phoneCode: "+385" },
    { name: "Czech Republic", code: "CZ", phoneCode: "+420" },
    { name: "Denmark", code: "DK", phoneCode: "+45" },
    { name: "Estonia", code: "EE", phoneCode: "+372" },
    { name: "Faroe Islands", code: "FO", phoneCode: "+298" },
    { name: "Falkland Islands", code: "FK", phoneCode: "+500" },
    { name: "Fiji", code: "FJ", phoneCode: "+679" },
    { name: "Finland", code: "FI", phoneCode: "+358" },
    { name: "France", code: "FR", phoneCode: "+33" },
    { name: "French Guiana", code: "GF", phoneCode: "+594" },
    { name: "French Polynesia", code: "PF", phoneCode: "+689" },
    { name: "Germany", code: "DE", phoneCode: "+49" },
    { name: "Greece", code: "GR", phoneCode: "+30" },
    { name: "Greenland", code: "GL", phoneCode: "+299" },
    { name: "Guadeloupe", code: "GP", phoneCode: "+590" },
    { name: "Guernsey", code: "GG", phoneCode: "+44" },
    { name: "Ireland", code: "IE", phoneCode: "+353" },
    { name: "Isle of Man", code: "IM", phoneCode: "+44" },
    { name: "Lesotho", code: "LS", phoneCode: "+266" },
    { name: "Liechtenstein", code: "LI", phoneCode: "+423" },
    { name: "Lithuania", code: "LT", phoneCode: "+370" },
    { name: "Luxembourg", code: "LU", phoneCode: "+352" },
    { name: "Macedonia", code: "MK", phoneCode: "+389" },
    { name: "Malawi", code: "MW", phoneCode: "+265" },
    { name: "Malta", code: "MT", phoneCode: "+356" },
    { name: "Martinique", code: "MQ", phoneCode: "+596" },
    { name: "Mayotte", code: "YT", phoneCode: "+262" },
    { name: "Montserrat", code: "MS", phoneCode: "+1" },
    { name: "Namibia", code: "NA", phoneCode: "+264" },
    { name: "New Caledonia", code: "NC", phoneCode: "+687" },
    { name: "New Zealand", code: "NZ", phoneCode: "+64" },
    { name: "Niue", code: "NU", phoneCode: "+683" },
    { name: "Norfolk Island", code: "NF", phoneCode: "+672" },
    { name: "Northern Islands", code: "MP", phoneCode: "+1" },
    { name: "Norway", code: "NO", phoneCode: "+47" },
    { name: "Oman", code: "OM", phoneCode: "+968" },
    { name: "Pitcairn", code: "PN", phoneCode: "+64" },
    { name: "Poland", code: "PL", phoneCode: "+48" },
    { name: "Portugal", code: "PT", phoneCode: "+351" },
    { name: "Qatar", code: "QA", phoneCode: "+974" },
    { name: "Réunion", code: "RE", phoneCode: "+262" },
    { name: "Rwanda", code: "RW", phoneCode: "+250" },
    { name: "Saint Martin", code: "MF", phoneCode: "+590" },
    { name: "Saint Pierre", code: "PM", phoneCode: "+508" },
    { name: "San Marino", code: "SM", phoneCode: "+378" },
    { name: "Singapore", code: "SG", phoneCode: "+65" },
    { name: "Slovenia", code: "SI", phoneCode: "+386" },
    { name: "Solomon Islands", code: "SB", phoneCode: "+677" },
    { name: "South Korea", code: "KR", phoneCode: "+82" },
    { name: "Spain", code: "ES", phoneCode: "+34" },
    { name: "Svalbard", code: "SJ", phoneCode: "+47" },
    { name: "Sweden", code: "SE", phoneCode: "+46" },
    { name: "Switzerland", code: "CH", phoneCode: "+41" },
    { name: "Taiwan", code: "TW", phoneCode: "+886" },
    { name: "Tonga", code: "TO", phoneCode: "+676" },
    { name: "Tokelau", code: "TK", phoneCode: "+690" },
    { name: "United Kingdom", code: "GB", phoneCode: "+44" },
    { name: "United States", code: "US", phoneCode: "+1" },
    { name: "Uruguay", code: "UY", phoneCode: "+598" },
    { name: "Vatican City", code: "VA", phoneCode: "+39" },
    { name: "Zambia", code: "ZM", phoneCode: "+260" }
    ];
  
  
  }
  EditUser() {
    if (!/^[a-zA-Z]*$/.test(this.firstname) || !/^[a-zA-Z]*$/.test(this.lastname)) {
      alert("First name and last name should only contain alphabetic characters.");
      return;
    }

    this.user.EditUserDetailes(this.firstname, this.lastname, this.country, this.currency).subscribe(
      (response) => {
        this.name = this.firstname;
        this.surname = this.lastname;
        this.currencyID = this.currency;
        this.countryID = this.country;
        this.presentSuccessToast();

        this.GetFirstName.emitUserDetailsUpdated({ firstName: this.firstname, lastName: this.lastname });
      },
      (error) => {
        alert("Please fill in all fields");
      }
    );
  }

    fetchUserDetails(): void {
      this.user.postUserLoggin().subscribe(
        (data) => {
          this.userDetails = data;
          this.userID = this.userDetails.entity.id
          this.name = this.userDetails.entity.firstName
          this.surname = this.userDetails.entity.lastName
          this.currencyID= this.userDetails.entity.currency
          this.countryID= this.userDetails.entity.country
          this.currency = this.currencyID;
          this.country=this.countryID
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
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
