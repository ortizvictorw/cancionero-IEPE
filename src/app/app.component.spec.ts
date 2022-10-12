import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  xit('should render title', () => {
    const component = fixture.nativeElement as HTMLElement;
    expect(component.querySelector('.content span')?.textContent).toContain('cancionero-iepe app is running!');
  });

  describe('navbar',()=>{
    it('render', ()=>{
      const debugElement = fixture.debugElement.query(By.css('nav#nav-bar'));
      expect(debugElement).toBeTruthy()
    })

  })
});
