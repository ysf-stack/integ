import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredDetailsPageComponent } from './insured-details-page.component';

describe('InsuredDetailsComponent', () => {
  let component: InsuredDetailsPageComponent;
  let fixture: ComponentFixture<InsuredDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuredDetailsPageComponent]
    });
    fixture = TestBed.createComponent(InsuredDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
