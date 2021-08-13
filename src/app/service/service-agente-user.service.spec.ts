import { TestBed } from '@angular/core/testing';

import { ServiceAgenteUserService } from './service-agente-user.service';

describe('ServiceAgenteUserService', () => {
  let service: ServiceAgenteUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAgenteUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
