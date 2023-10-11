import { Observable } from "rxjs";
import { GetCarsListRequest } from "../../models/get-cars-list-request";
import { GetCarsListResponse } from "../../models/get-cars-list-response";

export interface CarsService {
  getList(request: GetCarsListRequest): Observable<GetCarsListResponse>;
}
