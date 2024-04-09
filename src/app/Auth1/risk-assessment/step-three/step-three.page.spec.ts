import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepThreePage } from './step-three.page';

describe('StepThreePage', () => {
  let component: StepThreePage;
  let fixture: ComponentFixture<StepThreePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
