import { TestBed } from '@angular/core/testing';

import { Getcontent.ResolverService } from './getcontent.resolver.service';

describe('Getcontent.ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Getcontent.ResolverService = TestBed.get(Getcontent.ResolverService);
    expect(service).toBeTruthy();
  });
});
