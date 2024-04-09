import { Component, OnInit } from '@angular/core';import { Router } from '@angular/router';
import { UserService } from 'src/app/Auth1/shared/Main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { ProfileCompletionService } from 'src/app/Auth1/shared/ProfileCompletionService.service';
import { UserSavedService } from 'src/app/Auth1/shared/UserSavedID.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.page.html',
  styleUrls: ['./trading.page.scss'],
})
export class TradingPage implements OnInit {
  selectedBank: string = 'Credit Card';

currencies: any[] = [];
countries: any;
Bank:any;
type:any;
userID:any;
userIdAuto:any;
userId: any;
selectedGateway: any;
itemDescription:any
isOzowInitiated: boolean = false;
ID: any;
PaymentGateAway= [
  { labelGateAway: 'Ozow', valueGateAway: 'Ozow' },
  { labelGateAway: 'Payfast', valueGateAway: 'Payfast' },

];
getInputLabel(selectedBank: string): string {
  switch (selectedBank) {
    case 'Credit Card':
      return 'Card Information';
    case 'Wire':
      return ' Account number , swift code:';
      case 'BTC Wallet':
        return 'Wallet:';
        case 'Other':
          return 'Information:';
    default:
      return '';
  }
}

onGatewaySelectionChange(): void {
  if (this.selectedGateway === 'Ozow'  && this.amountDeposit !== null) {
    if (this.amountDeposit < 1500) {
      alert("You cannot deposit less than 1500 ZAR for Ozow.");
      this.amountDeposit = null;
    } else {
      this.proceedToOzow();
    }
  } else if (this.selectedGateway === 'Payfast' && this.amountDeposit !== null) {
    if (this.amountDeposit < 1500) {
      alert("You cannot deposit less than 1500 ZAR for Payfast.");
      this.amountDeposit = null;
    } else {
      this.proceedToPayFast();
    }
  }
}



  constructor(private router: Router ,
     private User: UserService ,
      private modalController: ModalController,
      private MainService: UserService,
      private fb: FormBuilder,
      private UserSavedID: UserSavedService, private profileCompletionService: ProfileCompletionService , private platform: Platform) {
   
      }
      
  ngOnInit() {
    
    this.setupBackButton();
    this.countries = [
      { name: "USD", code: "USD" },
      { name: "ZAR", code: "ZAR" },
    
    ];

    this.Bank = [
      { name: "Credit Card", code: "Credit Card" },
      { name: "Wire", code: "Wire" },
      { name: "BTC Wallet", code: "BTC Wallet" },
      { name: "Other", code: "Other" },
  
    ];
 this.fetchUserDetails();

 this.MainService.getCurrenciesForRegistrationScreen().subscribe(
  (data) => {
    this.currencies = data;

  },
  (error) => {
    console.error('Error fetching currencies:', error);
   
  }
);
  }
  isChecklistCompleted(): boolean {
   
    const isProfileComplete = this.profileCompletionService.isProfileComplete();
  

    const isProfileUpdatedWithRisk = this.profileCompletionService.checklistState.value.employmentStatus &&
                                     this.profileCompletionService.checklistState.value.education &&
                                     this.profileCompletionService.checklistState.value.onlineTrading &&
                                     this.profileCompletionService.checklistState.value.monthlyIncome &&
                                     this.profileCompletionService.checklistState.value.expectations &&
                                     this.profileCompletionService.checklistState.value.trade;
  

    return isProfileComplete && isProfileUpdatedWithRisk;
  }
  
  amountWithDrawal: any;
  currencyWithDrawal: any;

  
  // enter details 

  amountDeposit: any;
  statusDetails:any;
  userIdDeposit:any;
  agentIdDeposit: any;
  public tab: number = 0;
  public selectedTab: string = 'open'; 
  public userDetails: any; 
  public totalBalance: any;
  public IDNumber!: number;
  public currency: string| undefined;
 userId1: any;
  betty = this.UserSavedID.getUserId();
ozowSiteCode  = environment.SiteCode
ozowPrivateKey = environment.PrivateKey
  switchTab(tabName: string): void {

    this.selectedTab = tabName.toLowerCase();
  }
  isValidWithdrawal(): boolean {
// need to enter all this fields 
    return !!this.amountWithDrawal && !!this.currencyWithDrawal && !!this.statusDetails;
  }
  submitFormWithDrawal(amountWithDrawal: number, currencyWithDrawal: string,statusDetails:any, type:string)  : void {
    if (this.totalBalance === 0) {
      alert("Insufficient funds. Withdrawal cannot be made.");
      return; 
    } else if (amountWithDrawal > this.totalBalance) {
      alert("Withdrawal amount exceeds available balance. Withdrawal cannot be made.");
      return;
    } else {
      this.MainService.makeWithdrawal(amountWithDrawal, currencyWithDrawal,statusDetails)
        .subscribe(
          (response) => {
      console.log(response)
            alert("Successful Pending Withdrawal");
          },
          (error) => {
       console.log(error)
          }
        );
    }
  }


  setupBackButton() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.router.url !== '/login') {
        this.router.navigate([this.router.url]); 
        return;
      }
    });
  }
  

  fetchUserDetails(): void {
    this.User.postUserLoggin().subscribe(
      (data) => {
        this.userDetails = data;
        this.userID = this.userDetails.entity.id
        this.totalBalance = parseFloat(this.userDetails.entity.totalBalance).toFixed(2);
        this.currency = this.userDetails.entity.currency
        this.currencyWithDrawal = this.userDetails.entity.currency      
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }


private proceedToPayFast(): void {
  this.MainService.PendingDeposit(this.selectedGateway, this.amountDeposit)
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


private proceedToOzow(): void {
  this.MainService.PendingDeposit(this.selectedGateway, this.amountDeposit)
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
        this.isOzowInitiated = true;
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

