import { TestBed } from '@angular/core/testing';

import { TopultimasService } from './topultimas.service';

describe('TopultimasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopultimasService = TestBed.get(TopultimasService);
    expect(service).toBeTruthy();
  });
});
