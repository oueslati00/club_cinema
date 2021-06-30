import { TestBed } from '@angular/core/testing';

import { SimpleuserService } from './simpleuser.service';

describe('SimpleuserService', () => {
  let service: SimpleuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
