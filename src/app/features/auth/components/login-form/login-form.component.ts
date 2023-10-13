import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setIsLoggedIn } from 'src/app/shared/store/auth/auth.actions';
import { SharedStateStore } from 'src/app/shared/store/shared.state';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  constructor(private store: Store<SharedStateStore>, private router:Router) {}

  login(): void {
    // Http request to login the user
    const success = true;
    this.store.dispatch(setIsLoggedIn({ isLoggedIn: success }));
    this.router.navigate(['/']);
    //this.store.dispatch(loggedIn());
  }

  onLoginButtonClicked(): void {
    this.login();
  }
}
