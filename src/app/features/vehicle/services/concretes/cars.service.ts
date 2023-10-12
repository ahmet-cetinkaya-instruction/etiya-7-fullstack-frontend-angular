import { CarsAbstractService as CarsAbstractService } from '../abstracts/cars-abstract-service';
import { Observable } from 'rxjs';
import { GetCarsListRequest } from '../../models/cars/get-cars-list-request';
import { GetCarsListResponse } from '../../models/cars/get-cars-list-response';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsService extends CarsAbstractService {
  private readonly apiControllerUrl = `${enviroment.apiUrl}/cars`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getList(request: GetCarsListRequest): Observable<GetCarsListResponse> {
    console.log('CarsService.getList()');

    let endpoint = `${this.apiControllerUrl}/getlist`;
    if (request.brandId) endpoint += `/brandId/${request.brandId}`;
    let params: any = {
      pageIndex: request.pageIndex,
      pageSize: request.pageSize,
    };

    return this.httpClient.get<GetCarsListResponse>(
      endpoint,
      // `${this.apiControllerUrl}/getlist${
      //   request.brandId ? `/brandId/${request.brandId}` : ''
      // }`
      {
        params
      }
    );
  }
}
