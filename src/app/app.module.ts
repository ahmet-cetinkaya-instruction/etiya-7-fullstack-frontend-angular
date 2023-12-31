import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VehicleModule } from './features/vehicle/vehicle.module';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { CarManagmentPageComponent } from './pages/car-managment-page/car-managment-page.component';
import { PanelPageComponent } from './pages/panel-page/panel-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent, MyAccountPageComponent, CarManagmentPageComponent, PanelPageComponent, LoginPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    VehicleModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
