import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

describe('HardcodedAuthenticationService', () => {
  let service: HardcodedAuthenticationService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(HardcodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('using right credentials', () => {
    it('should process successful auth', () => {
      const username = 'jrivera';
      const password = 'dummy';
      spyOn(service, 'authenticate').and.callThrough();
      spyOn(window.sessionStorage, 'setItem').and.callFake(() => {});
      expect(service.authenticate(username, password)).toBeTruthy();
      expect(window.sessionStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('using wrong credentials', () => {
    it('should not authenticate', () => {
      const username = 'wrong-user';
      const password = 'wrong-password';
      spyOn(service, 'authenticate').and.callThrough();
      expect(service.authenticate(username, password)).toBeFalsy();
    });
  });

  it('should process the logout', () => {
    spyOn(window.sessionStorage, 'removeItem').and.callFake(() => {});
    service.logout();
    expect(window.sessionStorage.removeItem).toHaveBeenCalled();
  });
});
