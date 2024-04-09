import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Auth1/shared/Main.service';
import { Router } from '@angular/router';
import { UsersLoginService } from 'src/app/Auth1/shared/UserLoginSaved.service';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public totalBalance: any;
  public userDetails: any;
  userID: any;
  amountDeposit: any;
  selectedGateway: any;
  ozowSiteCode = environment.SiteCode;
  ozowPrivateKey = environment.PrivateKey;
  UserLogin: any;
  public currency: string = '';
  currencyWithDrawal: any;
  public tab = 0;
  selectedTab = 'open';
  PaymentGateAway = [
    { labelGateAway: 'Ozow', valueGateAway: 'Ozow' },
    { labelGateAway: 'Payfast', valueGateAway: 'Payfast' },
  ];

  trades = {
    open: [{ id: 1, name: 'Trade 1', status: 'Open' }],
    pending: [{ id: 3, name: 'Trade 3', status: 'Pending' }],
    closed: [{ id: 4, name: 'Trade 4', status: 'Closed' }],
  };

  constructor(
    private User: UserService,
    private platform: Platform,
    private router: Router,
    private userLogin: UsersLoginService
  ) {}

  setupBackButton() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.router.url !== '/login') {
        this.router.navigate([this.router.url]);
        return;
      }
    });
  }
  ngOnInit() {
    this.fetchUserDetails();
  }
  submitDeposit(): void {
    // Proceed with the deposit
    this.User.PendingDeposit(
      this.selectedGateway,
      this.amountDeposit
    ).subscribe(
      (response) => {},
      (error) => console.error('HTTP request error:', error)
    );
  }
  onGatewaySelectionChange(): void {
    if (this.selectedGateway === 'Ozow'  && this.amountDeposit !== null) {
      if (this.amountDeposit < 1500) {
        alert("You cannot deposit less than 1500 ZAR for Ozow.");
        this.amountDeposit = null;
      } else {
        this.proceedToOzow();
      }
    } else if (this.selectedGateway === 'Payfast' && this.amountDeposit !== null ) {
      if (this.amountDeposit < 1500) {
        alert("You cannot deposit less than 1500 ZAR for Payfast.");
        this.amountDeposit = null;
      } else {
        this.proceedToPayFast();
      }
    }
  }
  
  switchTab(tabName: string) {
    this.selectedTab = tabName;
  }
  navigateToTradePage() {
    this.router.navigate(['/trade']);
  }
  verifyUser() {
    this.User.GetRiskassessment().subscribe(
      (response) => {},
      (error) => {
        // Handle any errors

        alert('Wrong username / password ');
      }
    );
  }
  NavigateUserTrading() {
    this.router.navigate(['/trading/tab1']);
  }
  NavigateUserAboutusPage() {
    this.router.navigate(['/about-us/tab1']);
  }
  NavigateUserToolsPage() {
    this.router.navigate(['/tools/tab1']);
  }

  fetchUserDetails(): void {
    this.User.postUserLoggin().subscribe(
      (data) => {
        this.userDetails = data;
        this.userID = this.userDetails.entity.id;
        this.totalBalance = parseFloat(this.userDetails.entity.totalBalance).toFixed(2);
        this.currency = this.userDetails.entity.currency;
        this.currencyWithDrawal = this.userDetails.entity.currency;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }
  private proceedToPayFast(): void {
    this.User.PendingDeposit(this.selectedGateway, this.amountDeposit)
      .subscribe(
        (response) => {
          const pendingDepositId = response.id; 
          const itemName = `Deposit_${pendingDepositId}`;
          const itemDescription = `Deposit_${pendingDepositId}`;
          const Amount =  this.amountDeposit;
          const returnUrl = 'https://www.ubuntuinvest.com/payment_success';
          const cancelUrl = 'https://www.ubuntuinvest.com/payment_cancel';
          const notifyUrl = `https://backoffice.ubuntuinvest.com/rest/deposits/payfast/verifies/1?notify=1&locale=en&did=${pendingDepositId}&def=en&urlType=22`;
  
          const payFastUrl = this.User.initiatePayFastPayment(
            itemName,
            itemDescription,
            Amount,
            returnUrl,
            cancelUrl,
            notifyUrl
          );
  
          window.open(payFastUrl, '_blank');
        },
        (error) => {
        console.log(error)
        }
      );
  }
  

  // ozow integration
  private proceedToOzow(): void {
    this.User.PendingDeposit(this.selectedGateway, this.amountDeposit)
      .subscribe(
        (response) => {
          const pendingDepositId = response.id; 
          const SiteCode = this.ozowSiteCode;
          const CountryCode = "ZA";
          const CurrencyCode = "ZAR";
          const Amount = this.amountDeposit;
          const TransactionReference = `Deposit_${pendingDepositId}`; 
          const BankReference = `Deposit_${pendingDepositId}`; 
          const CancelUrl = "https://api.dev.fasta.co.za/eft/cancel";
          const ErrorUrl = "https://api.dev.fasta.co.za/eft/error";
          const SuccessUrl = "https://api.dev.fasta.co.za/eft/success";
          const NotifyUrl = `https://backoffice.ubuntuinvest.com/rest/deposits/ozow/verifies/1?notify=1&locale=en&did=${pendingDepositId}&def=en&urlType=22`; // Use the stored IDNumber
          const IsTest = false;
          const PrivateKey = this.ozowPrivateKey;
  
          const inputString = `${SiteCode}${CountryCode}${CurrencyCode}${Amount}${TransactionReference}${BankReference}${CancelUrl}${ErrorUrl}${SuccessUrl}${NotifyUrl}${IsTest}${PrivateKey}`;
          const HashCheck = this.User.getSha512Hash(inputString.toLowerCase());
    
          const payURL = this.User.initiateOzowPayment(
            SiteCode,
            CountryCode,
            CurrencyCode,
            Amount,
            TransactionReference,
            BankReference,
            CancelUrl,
            ErrorUrl,
            SuccessUrl,
            NotifyUrl,
            IsTest,
            HashCheck
          );
      
          window.open(payURL, '_blank');
        },
        (error) => {
        console.log(error)
        }
      );
  }
  
    
}
