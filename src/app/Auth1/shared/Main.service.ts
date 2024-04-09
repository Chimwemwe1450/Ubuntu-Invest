import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserSavedService } from './UserSavedID.service';
import { environment } from 'src/environments/environment.prod';
import * as crypto from 'crypto-js';
import { UsersLoginService } from './UserLoginSaved.service';
import { SelectedCurrencyService } from './SavedID.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

// back office 
  private Currencies = environment.Currencies
  private apiUrl = environment.apiUrl
  private tokenUrl = environment.tokenUrl
  private Resetpassword = environment.Resetpassword
  private UserVerification = environment.UserVerification
  private withdrawal = environment.withdrawal
  private ProfileRegister = environment.ProfileRegister
  private ProfileLogin  = environment.ProfileLogin 
  private Risk = environment.GetRiskAsssessment
 private UrlDeposit = environment.url
 private GetCurrencyforhome= environment.GetCurrency
 private Trades = environment.CreatingTrades
 risk:string = "" ; 
 // payment Url 
assetID: any;
  private accessToken: any;
  private userIdRegistration: any;
  private userIdLogin: any;
  private completeUrl:any; 
  private payfastApiUrl = 'https://www.payfast.co.za/eng/process';
  private payfastMerchantId = '17482145';
  private payfastMerchantKey = 'zlriwfncgfewy';
  private ozowApiKey = '';
  private URL = 'https://pay.ozow.com/';
  constructor(
    private http: HttpClient,
    private selectedCurrencyService: SelectedCurrencyService,
    private router: Router,
    private UserSaved: UserSavedService,
    private UserLogin: UsersLoginService
  ) { 
 // is for taking the saved ID from registration, storing the ID to a service then accessing the ID to the URL
    this.userIdRegistration = this.UserSaved.getUserId();

    this.getToken().subscribe((token) => {
      this.accessToken = token;
   
    });
  }
  getSha512Hash(stringToHash: string): string {
    return crypto.SHA512(stringToHash).toString();
  }
  // ozow  psp intergration 
  public initiateOzowPayment(
    SiteCode: string,
    CountryCode: string,
    CurrencyCode: string,
    Amount: number,
    TransactionReference: string,
    BankReference: string,
    CancelUrl: string,
    ErrorUrl: string,
    SuccessUrl: string,
    NotifyUrl: string,
    IsTest: boolean,
    Hashcheck: string
  ): string {
    const queryParams = new URLSearchParams({
      Apikey: this.ozowApiKey,
      SiteCode: SiteCode,
      CountryCode: CountryCode,
      CurrencyCode: CurrencyCode,
      Amount: Amount.toString(),
      TransactionReference: TransactionReference,
      BankReference: BankReference,
      CancelUrl: CancelUrl,
      ErrorUrl: ErrorUrl,
      SuccessUrl: SuccessUrl,
      NotifyUrl: NotifyUrl,
      IsTest: IsTest.toString(),
      Hashcheck: Hashcheck,
    });

    return `${this.URL}?${queryParams.toString()}`;
  }
  GetAllTrades(){
    this.userIdRegistration= this.UserSaved.getUserId(); 
    this.userIdLogin  = this.UserLogin.getUserId()
    if(this.userIdRegistration){
      this.userIdRegistration = this.UserSaved.getUserId();
      this.completeUrl = `https://backoffice.ubuntuinvest.com/rest/trades/${this.userIdRegistration}.json?access_token=${(this.accessToken as AccessToken).access_token}`;
      interface AccessToken {
        access_token: string;
        expires_in: number;
        token_type: string;
        scope: string;
        refresh_token: string;
      }
    }else if ( this.userIdLogin ) {
  
      this.completeUrl = `https://backoffice.ubuntuinvest.com/rest/trades/${this.userIdLogin}/trades.json?access_token=${(this.accessToken as AccessToken).access_token}`;
      interface AccessToken {
        access_token: string;
        expires_in: number;
        token_type: string;
        scope: string;
        refresh_token: string;
      }
    }

   
    const headers = new HttpHeaders({
      'Accept': 'x-www-form-urlencoded',
      'Authorization': `application/json`
    });
  
    return this.http.get(this.completeUrl,  { headers });
  }
  GetRiskForUser () : Observable<any>{

    this.userIdRegistration= this.UserSaved.getUserId(); 
    this.userIdLogin  = this.UserLogin.getUserId()
    if(this.userIdRegistration){
      this.userIdRegistration = this.UserSaved.getUserId();
      this.completeUrl = `https://backoffice.ubuntuinvest.com/rest/questionnaires/${this.userIdRegistration}?access_token=${(this.accessToken as AccessToken).access_token}`;
      interface AccessToken {
        access_token: string;
        expires_in: number;
        token_type: string;
        scope: string;
        refresh_token: string;
      }
    }else if ( this.userIdLogin ) {
  
      this.completeUrl = `https://backoffice.ubuntuinvest.com/rest/questionnaires/${this.userIdLogin}?access_token=${(this.accessToken as AccessToken).access_token}`;
      interface AccessToken {
        access_token: string;
        expires_in: number;
        token_type: string;
        scope: string;
        refresh_token: string;
      }
    }
    const headers = new HttpHeaders({
      'Accept': 'x-www-form-urlencoded',
      'Authorization': `application/json`
    });
  
  
    return this.http.get(`${ this.completeUrl }`, { headers });
  }
  
closeTrade(CloseTrade:number){
  this.completeUrl = `https://backoffice.ubuntuinvest.com/rest/trades/${CloseTrade}/cancels/trades.json?access_token=${(this.accessToken as AccessToken).access_token}`;
  interface AccessToken {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
    refresh_token: string;
  }
  const headers = new HttpHeaders({
    'Accept': 'x-www-form-urlencoded',
    'Authorization': `application/json`
  });
  return this.http.post(this.completeUrl , { headers });

}


  createTrade( assetId: string, takeProfit: string, stopLoss: string, position: string, isCurrency: string, leverage: string, type: string) {
    this.userIdRegistration= this.UserSaved.getUserId(); 
    this.userIdLogin  = this.UserLogin.getUserId()
this.assetID = this.selectedCurrencyService.getUserId()
    

    const selectedUserId = this.userIdLogin ? this.userIdLogin : this.userIdRegistration;
    this.completeUrl = `https://backoffice.ubuntuinvest.com/rest/trades/creates.json?access_token=${(this.accessToken as AccessToken).access_token}`;
      interface AccessToken {
        access_token: string;
        expires_in: number;
        token_type: string;
        scope: string;
        refresh_token: string;
      }

  
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  
    const body = new URLSearchParams();
    body.set('userId', selectedUserId);
    body.set('assetId', assetId);
    body.set('takeProfit', takeProfit);
    body.set('stopLoss', stopLoss);
    body.set('position', position);
    body.set('isCurrency', isCurrency);
    body.set('leverage', leverage);
    body.set('type', type);
  
    return this.http.post(this.completeUrl , body.toString(), { headers });
  }

    // Payfast Merchant Intergration
public initiatePayFastPayment(
  itemName: string,
  itemDescription: string,
  amount: number,
  returnUrl: string,
  cancelUrl: string,
  notifyUrl: string
): string {
  const queryParams = new URLSearchParams({
    merchant_id: this.payfastMerchantId,
    merchant_key: this.payfastMerchantKey,
    item_name: itemName,
    item_description: itemDescription,
    amount: amount.toString(),
    return_url: returnUrl,
    cancel_url: cancelUrl,
    notify_url: notifyUrl,
  });
  return `${this.payfastApiUrl}?${queryParams.toString()}`;
}
GetCurrency(){
  const headers = new HttpHeaders({
    'Accept': 'x-www-form-urlencoded',
    'Authorization': `application/json`
  });


  return this.http.get(`${this.GetCurrencyforhome}` , { headers });


}
  
GetRiskassessment() : Observable<any>{
    const headers = new HttpHeaders({
      'Accept': 'x-www-form-urlencoded',
      'Authorization': `application/json`
    });


    return this.http.get(`${this.Risk }`, { headers });
  }
  getCurrenciesForRegistrationScreen(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer`
    });

    // Make the GET request to the currencies endpoint
    return this.http.get(`${this.Currencies }`, { headers });
  }

  
  postUserLoggin(): Observable<any> {
  this.userIdRegistration= this.UserSaved.getUserId(); 
  this.userIdLogin  = this.UserLogin.getUserId()
    if(this.userIdRegistration){
      this.userIdRegistration = this.UserSaved.getUserId();
      this.completeUrl = `https://backoffice.ubuntuinvest.com/rest/users/${this.userIdRegistration}.json?access_token=${(this.accessToken as AccessToken).access_token}`;
      interface AccessToken {
        access_token: string;
        expires_in: number;
        token_type: string;
        scope: string;
        refresh_token: string;
      }
    }else if ( this.userIdLogin ) {
   
      this.userIdLogin  = this.UserLogin.getUserId()// User doesn't have a saved token, use the URL from Profile2
      this.completeUrl = `https://backoffice.ubuntuinvest.com/rest/users/${this.userIdLogin}.json?access_token=${(this.accessToken as AccessToken).access_token}`;
      interface AccessToken {
        access_token: string;
        expires_in: number;
        token_type: string;
        scope: string;
        refresh_token: string;
      }
    }


    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    });

    return this.http.get(this.completeUrl , { headers });
  }
  submitAnswer(userId:number, questionId: number, answerId: number, freeAnswer: string) {
    const url = 'https://backoffice.ubuntuinvest.com/rest/questionnaires/answers';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${this.risk}` ,
    });
    const body = {
      userId,
      questionId,
      answerId,
      freeAnswer,
    };

    return this.http.post(url, body, { headers });
  }
 
  EditUserDetailes(firstName: string, lastName: string, country: string, currency: string): Observable<any> {
    this.userIdRegistration = this.UserSaved.getUserId();
  this.userIdLogin = this.UserLogin.getUserId  
 
    if (this.userIdRegistration) {
      this.userIdRegistration = this.UserSaved.getUserId();
    
      this.completeUrl = `https://backoffice.ubuntuinvest.com/rest/users/${this.userIdRegistration}.json?access_token=${(this.accessToken as AccessToken).access_token}`;
      interface AccessToken {
        access_token: string;
        expires_in: number;
        token_type: string;
        scope: string;
        refresh_token: string;
      }
    } else if ( this.userIdLogin ) {
         this.userIdLogin  = this.UserLogin.getUserId()
        
         this.completeUrl = `https://backoffice.ubuntuinvest.com/rest/users/${this.userIdLogin}.json?access_token=${(this.accessToken as AccessToken).access_token}`;
         interface AccessToken {
           access_token: string;
           expires_in: number;
           token_type: string;
           scope: string;
           refresh_token: string;
         }
       }
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = `update[firstName]=${firstName}&update[lastName]=${lastName}&update[country]=${country}&update[currency]=${currency}`;

    const options = { headers };
    return this.http.put(this.completeUrl, body, options);
  }


  postUserDetails(userDetails: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer `
    });

    const body = new URLSearchParams();
    Object.keys(userDetails).forEach(key => {
      body.set(key, userDetails[key]);
    });

    return this.http.post(this.apiUrl, body.toString(), { headers });
  }

  getCurrencies(): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-www-form-urlencoded',
    });

    return this.http.get(`${this.apiUrl}/currencies`, { headers });
  }

  getToken(): Observable<any> {
    // Get the userId from the service
    this.userIdRegistration = this.UserSaved.getUserId();
    this.UserSaved.setUserId(this.userIdRegistration);
  
    const params = new HttpParams()
      .set('_format', 'json')
      .set('client_id', environment.clientId)
      .set('client_secret',environment.clientSecret)
      .set('grant_type', environment.grantType)
      .set('username',environment.username)
      .set('password', environment.password);

  
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });
  
    // Make a GET request with query parameters to obtain the token
    return this.http.get(this.tokenUrl, { params, headers }).pipe(
      tap((response: any) => {
        this.accessToken = response.access_token;
        this.apiUrl = `${this.apiUrl}?access_token=${this.accessToken}`;
        this.tokenUrl = `${this.tokenUrl}?access_token=${this.accessToken}`;
        this.Resetpassword = `${this.Resetpassword}?access_token=${this.accessToken}`;
        this.UserVerification = `${this.UserVerification}?access_token=${this.accessToken}`;
        this.UrlDeposit = `${this.UrlDeposit}access_token=${this.accessToken}`;
        this.withdrawal = `${this.withdrawal}access_token=${this.accessToken}`;
        this.GetCurrencyforhome =`${this.GetCurrencyforhome}access_token=${this.accessToken}`
        this.Trades = `${this.Trades}?access_token=${this.accessToken}`
        this.ProfileRegister = `${this.ProfileRegister}?access_token=${this.accessToken}`;
this.ProfileLogin=`${this.ProfileLogin}access_token=${this.accessToken}`
   this.Risk  = `${this.Risk}?access_token=${this.accessToken}`
   this.risk=`${this.risk}${this.accessToken}`
      })
    );
  }


  logout() {
    this.router.navigate(['/login']);
  }
  PendingDeposit(method: string, amount: number): Observable<any> {
    const endpoint = this.UrlDeposit;
   this.userIdLogin = this.UserLogin.getUserId();
 
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    });

    const body = `method=${method}&amount=${amount}&userId=${this.userIdLogin}`;

    const options = { headers };

    return this.http.post(endpoint, body, options);
  }

  makeWithdrawal(amount: number, currency: string , statusDetails:any  ): Observable<any> {
    const endpoint = this.withdrawal;
    let userId: string;
  

    if (this.UserLogin) {

      userId = this.UserLogin.getUserId();
    } else {

      userId = this.UserSaved.getUserId();
    }
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    });
  
    const body = `withdrawal[amount]=${amount}&withdrawal[currency]=${currency}&withdrawal[statusDetails]=${statusDetails}&withdrawal[user]=${userId}`;
  
    const options = { headers };
  
    return this.http.post(endpoint, body, options);
  }

  makeForgetpassword(username: string): Observable<any> {
    const url = `https://backoffice.ubuntuinvest.com/rest/users/iforgot?username=${username}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });

    return this.http.get(url, { headers });
  }


  verifyUser(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', 'application/json');

    const body = `username=${username}&password=${password}&_format=json`;

    return this.http.post(this.UserVerification, body, { headers, responseType: 'json' });
  }
}
