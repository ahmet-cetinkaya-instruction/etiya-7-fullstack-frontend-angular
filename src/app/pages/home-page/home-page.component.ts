import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  selectedBrandId: number | null = null;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  onSelectedBrand(brandId: number | null): void {
    this.selectedBrandId = brandId;
    this.changeDetectorRef.detectChanges();
  }
}
