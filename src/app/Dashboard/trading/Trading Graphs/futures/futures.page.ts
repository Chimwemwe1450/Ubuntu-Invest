import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-futures',
  templateUrl: './futures.page.html',
  styleUrls: ['./futures.page.scss'],
})
export class FuturesPage implements OnInit {
  @ViewChild('tradingviewWidget') tradingviewWidget: any;
  @ViewChild('tradingview')
  tradingView!: ElementRef;
  public colorTheme = '';

  ngOnInit() {}

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
      plotLineColorGrowing: '#1cb9c3',
      plotLineColorFalling: '#1cb9c3',
      gridLineColor: 'rgba(240, 243, 250, 0)',
      scaleFontColor: 'rgba(120, 123, 134, 1)',
      belowLineFillColorGrowing: '#DDF5F6',
      belowLineFillColorFalling: '#DDF5F6',
      belowLineFillColorGrowingBottom: '#ffffff',
      belowLineFillColorFallingBottom: '#ffffff',
      symbolActiveColor: '#FFEFD1',
      tabs: [
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
      ],
    };

    this.generateTradingviewCharts(options);
  }

  public generateTradingviewCharts(options: any): void {
    const objString: string = JSON.stringify(options);

    const marketsScript = document.createElement('script');
    marketsScript['type'] = 'text/javascript';
    marketsScript['src'] =
      'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    marketsScript['text'] = objString;

    this.tradingView.nativeElement.appendChild(marketsScript);

    const eventsScript = document.createElement('script');
    eventsScript.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    eventsScript.async = true;
    eventsScript.innerHTML = JSON.stringify({
      colorTheme: this.colorTheme,
      isTransparent: true,
      width: '100%',
      height: '500',
      locale: 'en',
      importanceFilter: '-1,0,1',
    });
  }
}
