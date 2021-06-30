import { TestBed } from '@angular/core/testing';

import { UpdateInformationService } from './update-information.service';

describe('UpdateInformationService', () => {
  let service: UpdateInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
