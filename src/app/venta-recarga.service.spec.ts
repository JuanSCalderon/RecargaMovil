import { TestBed } from '@angular/core/testing';

import { VentaRecargaService } from './venta-recarga.service';

describe('VentaRecargaService', () => {
  let service: VentaRecargaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaRecargaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
