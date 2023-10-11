import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VehicleModule } from './features/vehicle/vehicle.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    VehicleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
