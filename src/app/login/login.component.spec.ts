import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: HardcodedAuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [LoginComponent],
      providers: [HardcodedAuthenticationService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(HardcodedAuthenticationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalidLogin -> false when credential are right', () => {
    spyOn(service, 'authenticate').and.returnValue(true);
    component.handleLogin();
    expect(component.invalidLogin).toBeFalsy();
    expect(service.authenticate).toHaveBeenCalled();
  });

  it('should return invalidLogin -> true when credential are wrong', () => {
    spyOn(service, 'authenticate').and.returnValue(false);
    component.handleLogin();
    expect(component.invalidLogin).toBeTruthy();
    expect(service.authenticate).toHaveBeenCalled();
  });
});
