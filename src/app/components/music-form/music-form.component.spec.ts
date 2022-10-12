import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MusicFormComponent } from './music-form.component';

describe('MusicFormComponent', () => {
  let component: MusicFormComponent;
  let fixture: ComponentFixture<MusicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MusicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Sould card', () => {
    it('sould render card', () => {

      const debugElement = fixture.debugElement.query(By.css('div#card-sound'));
      expect(debugElement).toBeTruthy();
    })

  })


});
