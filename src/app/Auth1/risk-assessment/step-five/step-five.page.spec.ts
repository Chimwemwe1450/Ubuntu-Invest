import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepFivePage } from './step-five.page';

describe('StepFivePage', () => {
  let component: StepFivePage;
  let fixture: ComponentFixture<StepFivePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StepFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
