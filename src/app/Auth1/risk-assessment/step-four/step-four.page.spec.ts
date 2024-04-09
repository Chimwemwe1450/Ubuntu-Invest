import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepFourPage } from './step-four.page';

describe('StepFourPage', () => {
  let component: StepFourPage;
  let fixture: ComponentFixture<StepFourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StepFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
