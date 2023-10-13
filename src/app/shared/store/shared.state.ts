import { AuthStateStore } from './auth/auth.state';

export interface SharedStateStore {
  auth: AuthStateStore;
}
