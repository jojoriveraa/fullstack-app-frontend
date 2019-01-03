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
    let consoleLogSpy = spyOn(console, 'log');
    component.handleLogin()
    expect(consoleLogSpy.calls.count()).toBe(1)
  });
  
  describe('should render', () => {
    let compiled : any
    
    beforeEach(() => {
      compiled = fixture.debugElement.nativeElement;
    })

    it('should render the username field', () => {
      expect(compiled.querySelector('input[name="username"]')).not.toBeNull();
    });

    it('should render the password field', () => {
      expect(compiled.querySelector('input[name="password"]')).not.toBeNull();
    });

    it('should render the invalid credentials text', () => {
      expect(compiled.querySelector('small').textContent).toContain('Invalid credentials')
    });
  })


});
