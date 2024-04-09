import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatingtradesPage } from './creatingtrades.page';

describe('CreatingtradesPage', () => {
  let component: CreatingtradesPage;
  let fixture: ComponentFixture<CreatingtradesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreatingtradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
