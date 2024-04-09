import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiskAssessmentPage } from './risk-assessment.page';

describe('RiskAssessmentPage', () => {
  let component: RiskAssessmentPage;
  let fixture: ComponentFixture<RiskAssessmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RiskAssessmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
