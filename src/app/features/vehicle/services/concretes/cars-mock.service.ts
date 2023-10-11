import { CarsAbstractService } from '../abstracts/cars-service';
import { Observable, Subject } from 'rxjs';
import { GetCarsListRequest } from '../../models/get-cars-list-request';
import { GetCarsListResponse } from '../../models/get-cars-list-response';
import { HttpClient } from '@angular/common/http';
import { CarListItemDto } from '../../models/car-list-item-dto';
import { enviroment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsMockService extends CarsAbstractService {
  private readonly apiControllerUrl = `${enviroment.apiUrl}/cars`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getList(request: GetCarsListRequest): Observable<GetCarsListResponse> {
    console.log('CarsMockService.getList()');

    const subject: Subject<GetCarsListResponse> =
      new Subject<GetCarsListResponse>();

    const params: any = {
      _page: request.pageIndex,
      _limit: request.pageSize,
    };
    if (request.brandId != null) params['model.brandId'] = request.brandId;

    this.httpClient
      .get<CarListItemDto[]>(this.apiControllerUrl, {
        params, //= params: params
      })
      .subscribe({
        next: (data) => {
          // İşlem başarılı olduğunda
          const response: GetCarsListResponse = {
            pageIndex: request.pageIndex,
            pageSize: request.pageSize,
            count: data.length,
            hasNextPage: true,
            hasPreviousPage: true,
            items: data,
          };

          subject.next(response);
        },
        error: (error) => {
          // İşlem başarısız olduğunda, error oluştuğunda
          subject.error(error);
        },
        complete: () => {
          // İzlediğimiz (subscribe olduğumuz) subject tamamlanıp kapandığında
          subject.complete();
        },
      });

    return subject.asObservable();
  }
}
