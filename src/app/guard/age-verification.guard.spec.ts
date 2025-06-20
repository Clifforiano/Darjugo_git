import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ageVerificationGuard } from './age-verification.guard';

describe('ageVerificationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ageVerificationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
