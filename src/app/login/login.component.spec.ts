import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent]
    })
      .compileComponents();
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
    component.handleLogin()
    expect(spy.calls.count()).toBe(1)
  });

  describe('should render', () => {
    let compiled: any;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    })

    it('username field', () => {
      expect(compiled.querySelector('input[name="username"]')).not.toBeNull();
    });

    it('password field', () => {
      expect(compiled.querySelector('input[name="password"]')).not.toBeNull();
    });

    it('invalid credentials text when credentials are wrong', () => {
      component.invalidLogin = true;
      fixture.detectChanges()
      expect(compiled.querySelector('small').textContent).toContain('Invalid credentials');
    });
  })

  describe('should not render', () => {
    let compiled: any;

    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    })

    it('invalid credentials text when credentials are ok', () => {
      component.invalidLogin = false;
      fixture.detectChanges()
      expect(compiled.querySelector('small')).toBeNull();
    });
  });

});
