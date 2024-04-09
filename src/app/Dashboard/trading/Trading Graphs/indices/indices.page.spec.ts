import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicesPage } from './indices.page';

describe('IndicesPage', () => {
  let component: IndicesPage;
  let fixture: ComponentFixture<IndicesPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(IndicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
