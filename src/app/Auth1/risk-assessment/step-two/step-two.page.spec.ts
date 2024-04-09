import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepTwoPage } from './step-two.page';

describe('StepTwoPage', () => {
  let component: StepTwoPage;
  let fixture: ComponentFixture<StepTwoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
