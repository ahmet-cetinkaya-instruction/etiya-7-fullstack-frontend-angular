import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GetBrandsListRequest } from '../../models/brands/get-brands-list-request';
import { GetBrandsListResponse } from '../../models/brands/get-brands-list-response';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class BrandsAbstractService {
  constructor(protected httpClient: HttpClient) {}

  abstract getList(request: GetBrandsListRequest): Observable<GetBrandsListResponse>;
}
