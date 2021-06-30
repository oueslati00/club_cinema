import { TestBed } from '@angular/core/testing';

import { VideodkikaService } from './videodkika.service';

describe('VideodkikaService', () => {
  let service: VideodkikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideodkikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
