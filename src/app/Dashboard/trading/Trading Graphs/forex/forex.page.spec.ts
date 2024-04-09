import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForexPage } from './forex.page';

describe('ForexPage', () => {
  let component: ForexPage;
  let fixture: ComponentFixture<ForexPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(ForexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
