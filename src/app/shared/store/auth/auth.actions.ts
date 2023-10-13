import { createAction, props } from "@ngrx/store";

// Store'daki ilgili state'in nasıl değiştirileceğine dair aksiyonları tanımladığımız yerdir.
export const setIsLoggedIn = createAction(
  "[Shared/Auth] Set Is Logged In", // Benzersiz bir key olması gerekiyor
  props<{ isLoggedIn: boolean }>()
);

export const loggedIn = createAction(
  "[Shared/Auth] Logged In", // Benzersiz bir key olması gerekiyor
);

export const loggedOut = createAction(
  "[Shared/Auth] Logged Out", // Benzersiz bir key olması gerekiyor
);
