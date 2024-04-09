import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Auth1/shared/Main.service';
import { SelectedCurrencyService } from 'src/app/Auth1/shared/SavedID.service';
@Component({
  selector: 'app-creatingtrades',
  templateUrl: './creatingtrades.page.html',
  styleUrls: ['./creatingtrades.page.scss'],
})
export class CreatingtradesPage implements OnInit {
  currencies: any;
  totalBalance: any;
  constructor(private UserService:UserService , private selectedCurrencyService: SelectedCurrencyService) { }
  takeProfit:any
  stopLoss:any;
  position:any;
  isCurrency:any = '0';
  leverage:any = '1';
  type:any;
  SelectType:any;
  SelectPoistion:any;
  assetId:string ="";
  buyingstocks:any;
  
  selectedCurrencyId: any;
  ngOnInit() {
    this.getCurrency()
    this.SelectPoistion = [
      { name: "Buy" },
      { name: "Sell" },
    
  ];
  this.SelectType= [
    { name: "forex" },
    { name: "crypto" },
  
];
  }

  onCurrencySelected() {
    this.assetId = this.selectedCurrencyId;
  }
  getCurrency() {
    this.UserService.GetCurrency().subscribe(
      (data: any) => {
      
        if (data.entities && Array.isArray(data.entities) && data.entities.length > 0) {
          const currencyEntities = data.entities.filter((entity: any) => entity.type === 'currencies');
          const currenciesData = currencyEntities.map((entity: any) => {
            return { id: entity.soId, name: entity.name };
          });
         
          this.currencies = currenciesData;

            
            this.assetId = this.selectedCurrencyId;
         
        } 
      },
      (error) => {
        console.error('Error fetching currency:', error);
   
      }
    );
  }
  
  
  
  GetAllTrades(){

    this.UserService.GetAllTrades().subscribe(
      (response) => {
   
console.log(response)
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onCreateTrade(assetId: string, takeProfit: string, stopLoss: string, position: string, isCurrency: string, leverage: string, type: string) {
    this.UserService.createTrade(assetId, takeProfit, stopLoss, position, isCurrency, leverage, type).subscribe(
      (response: any) => {
        if (Array.isArray(response) && response.length > 0) {
          const errorMessage = response[0].error_message;
          const responseData = response[0][1]; 
          if (responseData) {
            const status = responseData.status; 
            alert(`Trade is : ${status}`);
            if (errorMessage) {
              alert(errorMessage);// diplay error message 
            }
          } else {
            alert(errorMessage);// diplay error message 
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }


}