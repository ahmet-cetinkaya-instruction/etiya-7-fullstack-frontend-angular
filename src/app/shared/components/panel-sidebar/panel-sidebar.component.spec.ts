import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSidebarComponent } from './panel-sidebar.component';

describe('PanelSidebarComponent', () => {
  let component: PanelSidebarComponent;
  let fixture: ComponentFixture<PanelSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelSidebarComponent]
    });
    fixture = TestBed.createComponent(PanelSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
