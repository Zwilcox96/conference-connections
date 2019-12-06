import { TestBed } from '@angular/core/testing';

import { AttendeesService } from './attendees.service';

describe('AttendeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttendeesService = TestBed.get(AttendeesService);
    expect(service).toBeTruthy();
  });
});
