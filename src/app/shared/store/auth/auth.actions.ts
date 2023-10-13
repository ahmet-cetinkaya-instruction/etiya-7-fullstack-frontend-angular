import { createAction, props } from "@ngrx/store";

// Store'daki ilgili state'in nasıl değiştirileceğine dair aksiyonları tanımladığımız yerdir.
export const setIsLoggedIn = createAction(
  "[Shared/Auth] Set User Model", // Benzersiz bir key olması gerekiyor
  props<{ isLoggedIn: boolean }>()
);
