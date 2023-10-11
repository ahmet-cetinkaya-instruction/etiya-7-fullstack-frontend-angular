import { Observable } from "rxjs";
import { GetCarsListRequest } from "../../models/get-cars-list-request";
import { GetCarsListResponse } from "../../models/get-cars-list-response";
import { Injectable } from "@angular/core";

@Injectable()
export abstract class CarsAbstractService {
  abstract getList(request: GetCarsListRequest): Observable<GetCarsListResponse>;
}
