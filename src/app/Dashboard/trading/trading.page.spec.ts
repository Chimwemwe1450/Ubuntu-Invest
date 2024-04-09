import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradingPage } from './trading.page';

describe('TradingPage', () => {
  let component: TradingPage;
  let fixture: ComponentFixture<TradingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TradingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
