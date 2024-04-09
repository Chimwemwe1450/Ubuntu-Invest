import { Component, OnInit } from '@angular/core';
import { UserService } from '../Auth1/shared/Main.service';
@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.page.html',
  styleUrls: ['./trade-history.page.scss'],
})
export class TradeHistoryPage implements OnInit {
  currencies:any;

  constructor(private UserService:UserService) { }

  ngOnInit() {
    this.getCurrency();
  }
  getCurrency() {
    this.UserService.GetAllTrades().subscribe(
      (data: any) => {
        if (data.entities && Array.isArray(data.entities) && data.entities.length > 0) {
          const currencyEntities = data.entities.filter((entity: any) => entity);
          const currenciesData = currencyEntities.map((entity: any) => {
            return { id: entity.id, name: entity.type, assetName: entity.assetName, position: entity.position, amount: entity.amount, status: entity.status };
          });
          this.currencies = currenciesData;
        } else {
          // Set currencies to an empty array if there's no data
          this.currencies = [];
        }
      },
      (error) => {
        console.error('Error fetching currency:', error);
        // Set currencies to an empty array if there's an error
        this.currencies = [];
      }
    );
  }
  GetAllTrades(){

    this.UserService.GetAllTrades().subscribe(
      (response) => {

      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
