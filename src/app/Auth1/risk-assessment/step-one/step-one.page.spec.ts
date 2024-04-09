import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepOnePage } from './step-one.page';

describe('StepOnePage', () => {
  let component: StepOnePage;
  let fixture: ComponentFixture<StepOnePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
