import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import { Observable } from 'rxjs';
import { SharedStateStore } from '../../store/shared.state';
import { Store } from '@ngrx/store';
import { loggedOut } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<SharedStateStore>) {
    this.isLoggedIn$ = store.select((state) => state.auth.isLoggedIn);
  }

  public navItems: NavItem[] = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Models',
      route: '/models',
    },
  ];

  onLogoutButtonClicked(): void {
    this.store.dispatch(loggedOut());
  }
}
