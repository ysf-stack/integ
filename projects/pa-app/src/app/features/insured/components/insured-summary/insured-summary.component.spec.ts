import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredSummaryComponent } from './insured-summary.component';

describe('InsuredSummaryComponent', () => {
  let component: InsuredSummaryComponent;
  let fixture: ComponentFixture<InsuredSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuredSummaryComponent]
    });
    fixture = TestBed.createComponent(InsuredSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
