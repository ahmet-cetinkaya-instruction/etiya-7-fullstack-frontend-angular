import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { PanelPageComponent } from './pages/panel-page/panel-page.component';
import { CarManagmentPageComponent } from './pages/car-managment-page/car-managment-page.component';
import { AddCarFormComponent } from './features/vehicle/components/add-car-form/add-car-form.component';
import { EditCarFormComponent } from './features/vehicle/components/edit-car-form/edit-car-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'my-account',
    component: MyAccountPageComponent,
  },
  {
    path: 'panel',
    // pathMatch: "prefix"
    component: PanelPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'car-managment',
      },
      {
        path: 'car-managment',
        component: CarManagmentPageComponent,
        children: [
          {
            path: 'add/:carId',
            component: AddCarFormComponent,
          },
          {
            path: 'edit/:carId',
            component: EditCarFormComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
