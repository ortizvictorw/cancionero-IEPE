import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ISound } from 'src/app/shared/interfaces/sound.interfaces';

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

  beforeEach(() => {
    component.sounds = []
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Sould card', () => {
    it('sould render card', () => {

      const soundsMock: ISound[] = [
        {
          category: 'Amor',
          description: 'El amor de Dios es maravillosos',
          duration: 30000,
          id: 1
        }
      ]

      component.sounds = soundsMock;
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('div#card-sound'));
      expect(debugElement).toBeTruthy();
    })

    it('sould not render with sounds is < 0', () => {
      const debugElement = fixture.debugElement.query(By.css('div#card-sound'));
      expect(debugElement).toBeFalsy();

    })

  })


});
