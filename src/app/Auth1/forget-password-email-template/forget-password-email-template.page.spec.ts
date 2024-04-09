import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgetPasswordEmailTemplatePage } from './forget-password-email-template.page';

describe('ForgetPasswordEmailTemplatePage', () => {
  let component: ForgetPasswordEmailTemplatePage;
  let fixture: ComponentFixture<ForgetPasswordEmailTemplatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgetPasswordEmailTemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
