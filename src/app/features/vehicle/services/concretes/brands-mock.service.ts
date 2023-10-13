import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import { BrandsAbstractService } from '../abstracts/brands-abstract-service';
import { Observable, Subject } from 'rxjs';
import { GetBrandsListRequest } from '../../models/brands/get-brands-list-request';
import { GetBrandsListResponse } from '../../models/brands/get-brands-list-response';
import { BrandListItemDto } from '../../models/brands/brand-list-item-dto';

@Injectable()
export class BrandsMockService extends BrandsAbstractService {
  private readonly apiControllerUrl = `${enviroment.apiUrl}/brands`;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  override getList(request: GetBrandsListRequest): Observable<GetBrandsListResponse> {
    const subject = new Subject<GetBrandsListResponse>();

    const params: any = {
      _page: request.pageIndex,
      _limit: request.pageSize,
    };
    if (request.name) params.name = request.name;

    this.httpClient.get<BrandListItemDto[]>(this.apiControllerUrl, { params }).subscribe({
      next: (response) => {
        const result: GetBrandsListResponse = {
          pageIndex: request.pageIndex,
          pageSize: request.pageSize,
          count: response.length,
          hasNextPage: true,
          hasPreviousPage: true,
          items: response,
        };

        subject.next(result);
      },
      error: (error) => {
        subject.error(error);
      },
      complete: () => {
        subject.complete();
      },
    });

    return subject.asObservable();
  }
}
