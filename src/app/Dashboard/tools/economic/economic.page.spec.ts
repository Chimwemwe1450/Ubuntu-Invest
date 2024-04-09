import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EconomicPage } from './economic.page';

describe('EconomicPage', () => {
  let component: EconomicPage;
  let fixture: ComponentFixture<EconomicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EconomicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
