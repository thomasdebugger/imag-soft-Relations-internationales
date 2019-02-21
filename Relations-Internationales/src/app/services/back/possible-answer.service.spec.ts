import { TestBed } from '@angular/core/testing';

import { PossibleAnswerService } from './possible-answer.service';

describe('PossibleAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PossibleAnswerService = TestBed.get(PossibleAnswerService);
    expect(service).toBeTruthy();
  });
});
