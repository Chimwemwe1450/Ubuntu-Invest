import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/Main.service';
import { Router } from '@angular/router';
import { UsernameStorageService } from '../shared/UsernameStorage.service';
import { UserSavedService } from '../shared/UserSavedID.service';
import { UsersService } from '../shared/UsernameSaved.service';
import { CountryService } from '../shared/Country.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  userForm: FormGroup;
  currencies: any[] = [];
  errorMessage: any;
  username = '';
  countries!: any[];
  currency: any[] | undefined;
  selectedCountry: string | undefined;
  selectedPhoneCode = '';
  latitude: number | undefined;
  longitude: number | undefined;
  passwordFieldType: string = 'password';
  passwordIcon: string = 'eye-of';
  phoneCode: any;
  private countrySubscription: Subscription | undefined;
  isReadonly() {
    return this.isReadonly;   //return true/false 
  }
  togglePasswordVisibility() {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordFieldType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }

  getCountries() {
    this.CountryService.getCountries().subscribe(
      (data) => {
        // Store the entire data array with both label and value properties
        this.countries = data;
      },
      (error) => {
        console.error('Error loading countries:', error);
      }
    );
  }
  filteredCountries: any[] | undefined;

  filterCountries(searchText: string) {
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public userStorage:UsersService,
    private router: Router,
    private UserIDSaved:UserSavedService,
    private CountryService :CountryService ,
  

  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: [''],
      prefixCountry: [64],
      areaPhone: [{value: '', disabled: false}],
      phone: [''],
      username: ['' ],
      plainPassword: ['', Validators.required],
      currency: [''],
      enabled: [1],
      demo: [0],
    });
    // making the field  email same as username 
    this.userForm.get('email')?.valueChanges.subscribe((value) => {
      this.userForm.patchValue({ username: value }, { emitEvent: false });
    });
    //  adding  the phone number from the Json  object 
    this.countrySubscription = this.userForm.get('country')?.valueChanges.subscribe((selectedCountryCode) => {
      const selectedCountry = this.countries.find((c) => c.code === selectedCountryCode);
      if (selectedCountry) {
        // Auto-fill the areaPhone field with the selected country's phone code
        this.userForm.patchValue({ areaPhone: selectedCountry.phoneCode });
      }
    });
  
  }
  onCountryChange(countryCode: string) {
    const country = this.countries.find(c => c.code === countryCode);
    if (country) {
      // Assuming you want to perform some numeric operation, which is rare
      const numericPhoneCode = parseInt(country.phoneCode.replace('+', ''), 10);
  
      // For display, prepend the '+' sign
      this.selectedPhoneCode = '+' + numericPhoneCode.toString();
      this.userForm.patchValue({ areaPhone: this.selectedPhoneCode });
    }
  }
  

  ngOnInit() {
    // Call the getCurrenciesForRegistrationScreen function when the component is initialized

    // only want two currencies 
    this.currency = [
      { name: "USD", code: "USD" },
      { name: "ZAR", code: "ZAR" },
    
  ];

    this.countries = [
  { name: "South Africa", code: "ZA", phoneCode: +27 },
  { name: "Andorra", code: "AD", phoneCode: +376 },
  { name: "Anguilla", code: "AI", phoneCode: +1 },
  { name: "Australia", code: "AU", phoneCode: +61 },
  { name: "Austria", code: "AT", phoneCode: +43 },
  { name: "Belgium", code: "BE", phoneCode: +32 },
  { name: "Bermuda", code: "BM", phoneCode: +1 },
  { name: "Bhutan", code: "BT", phoneCode: +975 },
  { name: "Burkina Faso", code: "BF", phoneCode: +226 },
  { name: "Canada", code: "CA", phoneCode: +1 },
  { name: "Chile", code: "CL", phoneCode: +56 },
  { name: "Cocos", code: "CC", phoneCode: +61 },
  { name: "Croatia", code: "HR", phoneCode: +385 },
  { name: "Czech Republic", code: "CZ", phoneCode: +420 },
  { name: "Denmark", code: "DK", phoneCode: +45 },
  { name: "Estonia", code: "EE", phoneCode: +372 },
  { name: "Faroe Islands", code: "FO", phoneCode: +298 },
  { name: "Falkland Islands", code: "FK", phoneCode: +500 },
  { name: "Fiji", code: "FJ", phoneCode: +679 },
  { name: "Finland", code: "FI", phoneCode: +358 },
  { name: "France", code: "FR", phoneCode: +33 },
  { name: "French Guiana", code: "GF", phoneCode: +594 },
  { name: "French Polynesia", code: "PF", phoneCode: +689 },
  { name: "Germany", code: "DE", phoneCode: +49 },
  { name: "Greece", code: "GR", phoneCode: +30 },
  { name: "Greenland", code: "GL", phoneCode: +299 },
  { name: "Guadeloupe", code: "GP", phoneCode: +590 },
  { name: "Guernsey", code: "GG", phoneCode: +44 },
  { name: "Ireland", code: "IE", phoneCode: +353 },
  { name: "Isle of Man", code: "IM", phoneCode: +44 },
  { name: "Lesotho", code: "LS", phoneCode: +266 },
  { name: "Liechtenstein", code: "LI", phoneCode: +423 },
  { name: "Lithuania", code: "LT", phoneCode: +370 },
  { name: "Luxembourg", code: "LU", phoneCode: +352 },
  { name: "Macedonia", code: "MK", phoneCode: +389 },
  { name: "Malawi", code: "MW", phoneCode: +265 },
  { name: "Malta", code: "MT", phoneCode: +356 },
  { name: "Martinique", code: "MQ", phoneCode: +596 },
  { name: "Mayotte", code: "YT", phoneCode: +262 },
  { name: "Montserrat", code: "MS", phoneCode: +1 },
  { name: "Namibia", code: "NA", phoneCode: +264 },
  { name: "New Caledonia", code: "NC", phoneCode: +687 },
  { name: "New Zealand", code: "NZ", phoneCode: +64 },
  { name: "Niue", code: "NU", phoneCode: +683 },
  { name: "Norfolk Island", code: "NF", phoneCode: +672 },
  { name: "Northern Islands", code: "MP", phoneCode: +1 },
  { name: "Norway", code: "NO", phoneCode: +47 },
  { name: "Oman", code: "OM", phoneCode: +968 },
  { name: "Pitcairn", code: "PN", phoneCode: +64 },
  { name: "Poland", code: "PL", phoneCode: +48 },
  { name: "Portugal", code: "PT", phoneCode: +351 },
  { name: "Qatar", code: "QA", phoneCode: +974 },
  { name: "Réunion", code: "RE", phoneCode: +262 },
  { name: "Rwanda", code: "RW", phoneCode: +250 },
  { name: "Saint Martin", code: "MF", phoneCode: +590 },
  { name: "Saint Pierre", code: "PM", phoneCode: +508 },
  { name: "San Marino", code: "SM", phoneCode: +378 },
  { name: "Singapore", code: "SG", phoneCode: +65 },
  { name: "Slovenia", code: "SI", phoneCode: +386 },
  { name: "Solomon Islands", code: "SB", phoneCode:+677 },
  { name: "South Korea", code: "KR", phoneCode: +82 },
  { name: "Spain", code: "ES", phoneCode: +34 },
  { name: "Svalbard", code: "SJ", phoneCode:+47 },
  { name: "Sweden", code: "SE", phoneCode: +46 },
  { name: "Switzerland", code: "CH", phoneCode: +41 },
  { name: "Taiwan", code: "TW", phoneCode: +886 },
  { name: "Tonga", code: "TO", phoneCode: +676 },
  { name: "Tokelau", code: "TK", phoneCode: +690 },
  { name: "United Kingdom", code: "GB", phoneCode: +44 },
  { name: "United States", code: "US", phoneCode: +1 },
  { name: "Uruguay", code: "UY", phoneCode: +598 },
  { name: "Vatican City", code: "VA", phoneCode: +39 },
  { name: "Zambia", code: "ZM", phoneCode: +260 }
  ];

}
ngOnDestroy() {
  // Unsubscribe from the subscription to avoid memory leaks
  this.countrySubscription?.unsubscribe();
}


  currencyWithDrawal: any;
  onSubmit() {
    if (this.userForm.valid) {
      this.userService.postUserDetails(this.userForm.value).subscribe(
        (data) => {
          const UserName = data.username;
      
    
          this.userStorage.setUsername(UserName);
          const UserID = data.id;
          this.UserIDSaved.setUserId(UserID);
          // Handle successful response
          this.router.navigate(['/risk-assessment']);
        },
        (errorResponse) => {
          console.error('Error while posting user details:', errorResponse);
          // Extract error message and display
          if (errorResponse && errorResponse.error && errorResponse.error.errors && errorResponse.error.errors.children) {
            const errorMessage = errorResponse.error.errors.children[0][0];
            alert(errorMessage);
          } 
        }
      );
    } else {
      // Show an alert message indicating required fields are not filled
      alert('Please fill in all required fields.');
    }
  }
  
}