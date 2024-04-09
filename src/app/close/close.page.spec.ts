import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClosePage } from './close.page';

describe('ClosePage', () => {
  let component: ClosePage;
  let fixture: ComponentFixture<ClosePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
