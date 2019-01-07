import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { RouteGuardService } from './route-guard.service';


describe('RouteGuardService', () => {
  const mockRoute = <RouterStateSnapshot>{ url: 'welcome' };
  const mockActivatedRouteSnapshot = new ActivatedRouteSnapshot();
  let service: RouteGuardService;
  let hardcodedAuthService: HardcodedAuthenticationService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [HardcodedAuthenticationService]
    })
  );

  beforeEach(() => {
    service = TestBed.get(RouteGuardService);
    hardcodedAuthService = TestBed.get(HardcodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for canActivate() and not set loginService.redirectUrl when isLoggedIn === true', () => {
    spyOn(hardcodedAuthService, 'isUserLoggedIn').and.returnValue(true);
    expect(
      service.canActivate(mockActivatedRouteSnapshot, mockRoute)
    ).toBeTruthy();
  });

  it('should return false for canActivate() and set loginService.redirectUrl when isLoggedIn === false', () => {
    spyOn(hardcodedAuthService, 'isUserLoggedIn').and.returnValue(false);
    expect(
      service.canActivate(mockActivatedRouteSnapshot, mockRoute)
    ).toBeFalsy();
  });
});
