import { TestBed } from '@angular/core/testing';

import { TopHeadersService } from './top-headers.service';

describe('TopHeadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopHeadersService = TestBed.get(TopHeadersService);
    expect(service).toBeTruthy();
  });
});
