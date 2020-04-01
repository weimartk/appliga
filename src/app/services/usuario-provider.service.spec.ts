import { TestBed } from '@angular/core/testing';

import { UsuarioProviderService } from './usuario-provider.service';

describe('UsuarioProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioProviderService = TestBed.get(UsuarioProviderService);
    expect(service).toBeTruthy();
  });
});
