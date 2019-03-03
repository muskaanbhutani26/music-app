import { TestBed, inject } from '@angular/core/testing';

import { DreezerMusicService } from './dreezer-music.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

describe('DreezerMusicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DreezerMusicService, HttpClientModule, HttpClient, HttpHandler, {provide: APP_BASE_HREF, useValue: '/'}]
    });
  });

  it('should be created', inject([DreezerMusicService], (service: DreezerMusicService) => {
    expect(service).toBeTruthy();
  }));
});
