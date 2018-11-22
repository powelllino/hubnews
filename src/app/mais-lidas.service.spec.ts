import { TestBed } from '@angular/core/testing';

import { MaisLidasService } from './mais-lidas.service';

describe('MaisLidasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaisLidasService = TestBed.get(MaisLidasService);
    expect(service).toBeTruthy();
  });
});
