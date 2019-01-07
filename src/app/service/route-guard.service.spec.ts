import { TestBed } from '@angular/core/testing';

import { RouteGuardService } from './route-guard.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('RouteGuardService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [RouterTestingModule] })
  );

  it('should be created', () => {
    const service: RouteGuardService = TestBed.get(RouteGuardService);
    expect(service).toBeTruthy();
  });
});
