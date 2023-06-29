import { TestBed } from '@angular/core/testing';

import { StoringDataServiceService } from './storing-data-service.service';

describe('StoringDataServiceService', () => {
  let service: StoringDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoringDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
