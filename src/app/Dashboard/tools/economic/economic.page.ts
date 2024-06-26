import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  OnChanges,
} from '@angular/core';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-economic',
  templateUrl: './economic.page.html',
  styleUrls: ['./economic.page.scss'],
})
export class EconomicPage implements OnInit,AfterViewInit {
  @ViewChild('tradingviewWidget') tradingviewWidget: any;
  public colorTheme = '';
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const options = {
      colorTheme: this.colorTheme,
      dateRange: '12M',
      showChart: true,
      locale: 'en',
      largeChartUrl: '',
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: '100%',
      height: '570',
      plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
      plotLineColorFalling: 'rgba(41, 98, 255, 1)',
      gridLineColor: 'rgba(240, 243, 250, 0)',
      scaleFontColor: 'rgba(120, 123, 134, 1)',
      belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
      belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
      belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
      belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
      symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
      tabs: [
        {
          title: 'Indices',
          symbols: [
            {
              s: 'FOREXCOM:SPXUSD',
              d: 'S&P 500',
            },
            {
              s: 'FOREXCOM:NSXUSD',
              d: 'US 100',
            },
            {
              s: 'FOREXCOM:DJI',
              d: 'Dow 30',
            },
            {
              s: 'INDEX:NKY',
              d: 'Nikkei 225',
            },
            {
              s: 'INDEX:DEU40',
              d: 'DAX Index',
            },
            {
              s: 'FOREXCOM:UKXGBP',
              d: 'UK 100',
            },
          ],
          originalTitle: 'Indices',
        },
        {
          title: 'Futures',
          symbols: [
            {
              s: 'CME_MINI:ES1!',
              d: 'S&P 500',
            },
            {
              s: 'CME:6E1!',
              d: 'Euro',
            },
            {
              s: 'COMEX:GC1!',
              d: 'Gold',
            },
            {
              s: 'NYMEX:CL1!',
              d: 'Crude Oil',
            },
            {
              s: 'NYMEX:NG1!',
              d: 'Natural Gas',
            },
            {
              s: 'CBOT:ZC1!',
              d: 'Corn',
            },
          ],
          originalTitle: 'Futures',
        },
        {
          title: 'Bonds',
          symbols: [
            {
              s: 'CME:GE1!',
              d: 'Eurodollar',
            },
            {
              s: 'CBOT:ZB1!',
              d: 'T-Bond',
            },
            {
              s: 'CBOT:UB1!',
              d: 'Ultra T-Bond',
            },
            {
              s: 'EUREX:FGBL1!',
              d: 'Euro Bund',
            },
            {
              s: 'EUREX:FBTP1!',
              d: 'Euro BTP',
            },
            {
              s: 'EUREX:FGBM1!',
              d: 'Euro BOBL',
            },
          ],
          originalTitle: 'Bonds',
        },
        {
          title: 'Forex',
          symbols: [
            {
              s: 'FX:EURUSD',
              d: 'EUR/USD',
            },
            {
              s: 'FX:GBPUSD',
              d: 'GBP/USD',
            },
            {
              s: 'FX:USDJPY',
              d: 'USD/JPY',
            },
            {
              s: 'FX:USDCHF',
              d: 'USD/CHF',
            },
            {
              s: 'FX:AUDUSD',
              d: 'AUD/USD',
            },
            {
              s: 'FX:USDCAD',
              d: 'USD/CAD',
            },
          ],
          originalTitle: 'Forex',
        },
      ],
    };

    this.generateTradingviewCharts(options);
  }
  public generateTradingviewCharts(options: any): void {
 

    const eventsScript = document.createElement('script');
    eventsScript.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    eventsScript.async = true;
    eventsScript.innerHTML = JSON.stringify({
     
      isTransparent: true,
      width: '100%',
      height: '500',
      locale: 'en',
      importanceFilter: '-1,0,1',
    });

    this.tradingviewWidget.nativeElement.appendChild(eventsScript);
  }
}
