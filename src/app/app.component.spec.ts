import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WelcomeComponent} from './welcome/welcome.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, WelcomeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('todo');
  });

  describe('should render', () => {

    let fixture
    let compiled


    beforeEach( () => {
      fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    })

    it('title in a h1 tag', () => {
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to todo!');
    });
  
    it('author in a h2 tag', () => {
      expect(compiled.querySelector('h2').textContent).toContain('By jriverai');
    });
  
    it('the welcome-app component', () => {
      expect(compiled.querySelector('app-welcome')).not.toBeNull();
    });

  })
});
