import { Observable } from "rxjs";
import { GetCarsListRequest } from "../../models/cars/get-cars-list-request";
import { GetCarsListResponse } from "../../models/cars/get-cars-list-response";
import { Injectable } from "@angular/core";

@Injectable()
export abstract class CarsAbstractService {
  abstract getList(request: GetCarsListRequest): Observable<GetCarsListResponse>;
}
