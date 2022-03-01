import { TestBed } from '@angular/core/testing';

import { SongTileServiceService } from './song-tile-service.service';

describe('SongTileServiceService', () => {
  let service: SongTileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongTileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
