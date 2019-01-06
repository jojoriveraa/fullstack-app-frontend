import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [LoginComponent],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle the login', () => {
    const spy = spyOnProperty(component, 'invalidLogin', 'set');
    component.handleLogin();
    expect(spy.calls.count()).toBe(1);
  });

  it('should redirect to welcome after login', () => {
    component.username = 'jrivera';
    component.password = 'dummy';
    component.handleLogin();
    expect(mockRouter.navigate).toHaveBeenCalledWith([
      'welcome',
      component.username
    ]);
  });

  describe('should render', () => {
    let compiled: any;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    });

    it('username field', () => {
      expect(compiled.querySelector('input[name="username"]')).not.toBeNull();
    });

    it('password field', () => {
      expect(compiled.querySelector('input[name="password"]')).not.toBeNull();
    });

    it('invalid credentials text when credentials are wrong', () => {
      component.invalidLogin = true;
      fixture.detectChanges();
      expect(compiled.querySelector('div.alert-warning').textContent).toContain(
        'Invalid credentials'
      );
    });
  });

  describe('should not render', () => {
    it('invalid credentials text when credentials are ok', () => {
      const compiled = fixture.debugElement.nativeElement;
      component.invalidLogin = false;
      fixture.detectChanges();
      expect(compiled.querySelector('div.alert-warning')).toBeNull();
    });
  });
});
