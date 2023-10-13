export interface AuthStateStore {
  isLoggedIn: boolean;
}

// State'lerimizin başlangıç değerini veriyoruz.
export const initialAuthStateStore: AuthStateStore = {
  isLoggedIn: false,
};
