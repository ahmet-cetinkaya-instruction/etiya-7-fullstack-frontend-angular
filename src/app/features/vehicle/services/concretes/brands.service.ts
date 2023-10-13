import { Injectable } from '@angular/core';
import { BrandsAbstractService } from '../abstracts/brands-abstract-service';
import { Observable } from 'rxjs';
import { GetBrandsListRequest } from '../../models/brands/get-brands-list-request';
import { GetBrandsListResponse } from '../../models/brands/get-brands-list-response';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environment';

@Injectable()
export class BrandsService extends BrandsAbstractService {
  private readonly apiControllerUrl = `${enviroment.apiUrl}/brands`;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  override getList(request: GetBrandsListRequest): Observable<GetBrandsListResponse> {
    return this.httpClient.get<GetBrandsListResponse>(this.apiControllerUrl, { params: { ...request } });
  }
}
