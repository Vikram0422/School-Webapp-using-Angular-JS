import { TestBed } from '@angular/core/testing';

import { Sidepanelservice } from './sidepanel.service';

describe('SidepanelserviceService', () => {
  let service: Sidepanelservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sidepanelservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
