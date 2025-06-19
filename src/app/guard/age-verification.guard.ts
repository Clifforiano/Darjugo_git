import { CanActivateFn } from '@angular/router';

export const ageVerificationGuard: CanActivateFn = (route, state) => {
  return true;
};
