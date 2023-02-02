import { TestBed } from '@angular/core/testing';

import { PagarGuard } from './pagar.guard';

describe('PagarGuard', () => {
  let guard: PagarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PagarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
