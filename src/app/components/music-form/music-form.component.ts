import { Component, Input, OnInit } from '@angular/core';
import { ISound } from 'src/app/shared/interfaces/sound.interfaces';

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.sass']
})
export class MusicFormComponent implements OnInit {
  @Input() sounds:ISound[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
