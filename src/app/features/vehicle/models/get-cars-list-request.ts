import { PageRequest } from 'src/app/core/models/page-request';

export interface GetCarsListRequest extends PageRequest {
  brandId?: number;
}
