import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuturesPage } from './futures.page';

describe('FuturesPage', () => {
  let component: FuturesPage;
  let fixture: ComponentFixture<FuturesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FuturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
