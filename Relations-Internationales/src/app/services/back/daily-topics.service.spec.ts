import { TestBed } from '@angular/core/testing';

import { DailyTopicsService } from './daily-topics.service';

describe('DailyTopicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyTopicsService = TestBed.get(DailyTopicsService);
    expect(service).toBeTruthy();
  });
});
