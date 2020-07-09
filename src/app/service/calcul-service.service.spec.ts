import { TestBed } from '@angular/core/testing';

import { CalculServiceService } from './calcul-service.service';

describe('CalculServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculServiceService = TestBed.get(CalculServiceService);
    expect(service).toBeTruthy();
  });
});
