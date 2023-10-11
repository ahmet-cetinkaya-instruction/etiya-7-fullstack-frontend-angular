import { GetCarsListRequest } from '../../models/cars/get-cars-list-request';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CarsAbstractService } from '../../services/abstracts/cars-abstract-service';
import { GetCarsListResponse } from '../../models/cars/get-cars-list-response';

@Component({
  selector: 'app-car-card-list',
  templateUrl: './car-card-list.component.html',
  styleUrls: ['./car-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCardListComponent implements OnInit {
  carsList!: GetCarsListResponse; // !: bu değeri kullanmadan önce set edeceğimize dair söz vermiş oluyoruz.
  isLoading = false;

  @Input() brandId?: number; // Input değiştiği zaman changeDetector.detectChanges() çalışır.

  constructor(
    private carsService: CarsAbstractService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList({ pageIndex: 0, pageSize: 9, brandId: this.brandId });
  }

  getList(request: GetCarsListRequest): void {
    this.isLoading = true;
    this.changeDetector.detectChanges();

    this.carsService.getList(request).subscribe({
      next: (response) => {
        this.carsList = response;
        this.isLoading = false;

        this.changeDetector.detectChanges(); // OnPush ile çalıştığımız için değişiklikleri bildirmemiz gerekiyor.
      },
    });
  }

  onRentButtonClicked() {
    // HTML tarafında bir event tetiklendiyse bu noktada changeDetector.detectChanges() çalışır.
  }
}
