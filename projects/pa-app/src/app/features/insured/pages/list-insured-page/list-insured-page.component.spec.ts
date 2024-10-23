import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInsuredPageComponent } from './list-insured-page.component';

describe('ListInsuredComponent', () => {
  let component: ListInsuredPageComponent;
  let fixture: ComponentFixture<ListInsuredPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInsuredPageComponent]
    });
    fixture = TestBed.createComponent(ListInsuredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
