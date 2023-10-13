// Store'da bulunan state'leri tanımlayıcaz, hem de state'lerin nasıl ve hangi aksiyonlarla
// değiştirileceğini tanımladığımız yerdir.

import { createReducer, on } from '@ngrx/store';
import { AuthStateStore, initialAuthStateStore } from './auth.state';
import { loggedIn, loggedOut, setIsLoggedIn } from './auth.actions';

export const authReducer = createReducer(
  initialAuthStateStore,

  on(setIsLoggedIn, (state, action) => {
    const newAuthStateStore: AuthStateStore = { ...state, isLoggedIn: action.isLoggedIn };
    return newAuthStateStore;
  }),

  on(loggedIn, (state, action) => {
    const newAuthStateStore: AuthStateStore = { ...state, isLoggedIn: true };
    return newAuthStateStore;
  }),

  on(loggedOut, (state, action) => {
    const newAuthStateStore: AuthStateStore = { ...state, isLoggedIn: false };
    return newAuthStateStore;
  })
);
