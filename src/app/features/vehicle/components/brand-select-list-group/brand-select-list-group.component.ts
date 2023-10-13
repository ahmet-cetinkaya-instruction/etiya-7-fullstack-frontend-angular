import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BrandsAbstractService } from '../../services/abstracts/brands-abstract-service';
import { GetBrandsListRequest } from '../../models/brands/get-brands-list-request';
import { GetBrandsListResponse } from '../../models/brands/get-brands-list-response';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-brand-select-list-group',
  templateUrl: './brand-select-list-group.component.html',
  styleUrls: ['./brand-select-list-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandSelectListGroupComponent implements OnInit {
  brandsList!: GetBrandsListResponse;
  selectedBrandId?: number | null = null;
  @Output() select = new EventEmitter<number | null>();
  @Input() useQueryParams = false;

  constructor(
    private brandsService: BrandsAbstractService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getList({ pageIndex: 0, pageSize: 10 });
    this.checkQueryParams();
  }

  checkQueryParams(): void {
    if (!this.useQueryParams) return;

    this.activedRoute.queryParams.pipe(take(1)).subscribe((params) => {
      if (params['brand']) {
        console.log('queryParams', params['brand']);

        this.selectBrand(Number(params['brand']));
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  getList(request: GetBrandsListRequest): void {
    this.brandsService.getList(request).subscribe({
      next: (response) => {
        this.brandsList = response;
        this.changeDetectorRef.detectChanges();
      },
    });
  }

  onBrandListItemClicked(brandId: number | null): void {
    console.log('onBrandListItemClicked', brandId);

    this.selectBrand(brandId);
    if (this.useQueryParams) this.router.navigate([], { queryParams: { brand: this.selectedBrandId } });
  }

  selectBrand(brandId: number | null) {
    console.log('selecBrand', brandId);

    this.selectedBrandId = brandId;
    this.select.emit(brandId);
  }

  isSelected(brandId: number | null): boolean {
    return this.selectedBrandId === brandId;
  }
}
