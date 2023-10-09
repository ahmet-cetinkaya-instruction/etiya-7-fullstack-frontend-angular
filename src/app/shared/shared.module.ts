import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainLayoutComponent,
    FooterComponent
  ],
  exports: [
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
