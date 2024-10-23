import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavailableServiceComponent } from './unavailable-service.component';

describe('AccessDeniedComponent', () => {
  let component: UnavailableServiceComponent;
  let fixture: ComponentFixture<UnavailableServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnavailableServiceComponent]
    });
    fixture = TestBed.createComponent(UnavailableServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
