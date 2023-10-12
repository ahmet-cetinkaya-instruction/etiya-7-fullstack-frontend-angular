import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardListComponent } from './components/car-card-list/car-card-list.component';
import { CarsAbstractService } from './services/abstracts/cars-abstract-service';
import { CarsMockService } from './services/concretes/cars-mock.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCarFormComponent } from './components/add-car-form/add-car-form.component';
import { EditCarFormComponent } from './components/edit-car-form/edit-car-form.component';

@NgModule({
  declarations: [
    CarCardListComponent,
    AddCarFormComponent,
    EditCarFormComponent
  ],
  exports: [
    CarCardListComponent,
    AddCarFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: CarsAbstractService,
      useClass: CarsMockService,
    } // IoC Container'a müdahale etmiş oluyoruz.
  ]
})
export class VehicleModule { }
