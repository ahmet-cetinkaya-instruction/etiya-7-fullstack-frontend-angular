import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-car-card-list',
  templateUrl: './car-card-list.component.html',
  styleUrls: ['./car-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCardListComponent {
  cars: any[] = [
    "",
    ""
  ];
}
