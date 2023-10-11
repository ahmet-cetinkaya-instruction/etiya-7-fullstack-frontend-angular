import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardListComponent } from './components/car-card-list/car-card-list.component';



@NgModule({
  declarations: [
    CarCardListComponent
  ],
  exports: [
    CarCardListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehicleModule { }
