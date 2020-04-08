import { TestBed } from '@angular/core/testing';

import { RegistroProviderService } from './registro-provider.service';

describe('RegistroProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroProviderService = TestBed.get(RegistroProviderService);
    expect(service).toBeTruthy();
  });
});
