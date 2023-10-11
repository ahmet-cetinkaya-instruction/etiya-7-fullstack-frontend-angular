import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardListComponent } from './components/car-card-list/car-card-list.component';
import { CarsAbstractService } from './services/abstracts/cars-service';
import { CarsMockService } from './services/concretes/cars-mock.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CarCardListComponent
  ],
  exports: [
    CarCardListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: CarsAbstractService,
      useClass: CarsMockService,
    } // IoC Container'a müdahale etmiş oluyoruz.
  ]
})
export class VehicleModule { }
