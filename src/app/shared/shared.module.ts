import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';
import { PanelSidebarComponent } from './components/panel-sidebar/panel-sidebar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainLayoutComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    PanelLayoutComponent,
    PanelSidebarComponent
  ],
  exports: [
    LoadingSpinnerComponent,
    MainLayoutComponent,
    PanelLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
