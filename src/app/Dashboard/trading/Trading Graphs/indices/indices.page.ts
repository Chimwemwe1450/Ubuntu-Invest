import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-indices',
  templateUrl: './indices.page.html',
  styleUrls: ['./indices.page.scss'],
})
export class IndicesPage implements OnInit {
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
