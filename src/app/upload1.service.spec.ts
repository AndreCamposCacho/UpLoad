import { TestBed } from '@angular/core/testing';

import { Upload1Service } from './upload1.service';

describe('Upload1Service', () => {
  let service: Upload1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Upload1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
