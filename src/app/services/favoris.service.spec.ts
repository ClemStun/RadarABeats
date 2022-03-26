import { TestBed } from '@angular/core/testing';

import { FavorisService } from './favoris.service';

describe('FavorisService', () => {
  let service: FavorisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavorisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
