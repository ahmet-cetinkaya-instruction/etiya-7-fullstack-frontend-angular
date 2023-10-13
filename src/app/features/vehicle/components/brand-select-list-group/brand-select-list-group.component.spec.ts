import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSelectListGroupComponent } from './brand-select-list-group.component';

describe('BrandSelectListGroupComponent', () => {
  let component: BrandSelectListGroupComponent;
  let fixture: ComponentFixture<BrandSelectListGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandSelectListGroupComponent]
    });
    fixture = TestBed.createComponent(BrandSelectListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
