import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/Auth1/shared/Main.service';
@Component({
  selector: 'app-close',
  templateUrl: './close.page.html',
  styleUrls: ['./close.page.scss'],
})
export class ClosePage implements OnInit {
close:any;
  constructor(private UserService:UserService ) { }

  ngOnInit() {

  }
  CloseTrades(close: number) {
    this.UserService.closeTrade(close).subscribe(
      (response: any) => {
        if (response && response.length > 0 && response[0].payout) {
          const payoutMessage = response[0].payout;
          alert('Payout message: ' + payoutMessage);

        } else {
          alert('Payout message not found in response.');

        }
      },
      (error: any) => {
        alert(error.error.error_message);
      }
    );
  }
  
}  

