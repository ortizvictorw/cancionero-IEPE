import { Component, OnInit } from '@angular/core';
import { ISound } from 'src/app/shared/interfaces/sound.interfaces';

const soundsMock: ISound[] = [
  {
    category: 'Amor',
    description: 'El amor de Dios es maravillosos',
    duration: 30000,
    id: 1,
    lyrics:'letra'
  }
]

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.sass']
})
export class MusicFormComponent implements OnInit {
  sounds:ISound[] = soundsMock;

  constructor() { }

  ngOnInit(): void {
  }

}
