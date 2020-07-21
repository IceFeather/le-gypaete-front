import { TestBed } from '@angular/core/testing';

import { DiaporamaService } from './diaporama.service';

describe('DiaporamaService', () => {
  let service: DiaporamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaporamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
