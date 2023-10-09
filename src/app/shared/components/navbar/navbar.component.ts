import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  public navItems : NavItem[] = [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'Models',
      route: '/models'
    }
  ]
}
