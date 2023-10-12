import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarManagmentPageComponent } from './car-managment-page.component';

describe('CarManagmentPageComponent', () => {
  let component: CarManagmentPageComponent;
  let fixture: ComponentFixture<CarManagmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarManagmentPageComponent]
    });
    fixture = TestBed.createComponent(CarManagmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
