import { MusicFormComponent } from './music-form/music-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [ProgressBarComponent,MusicFormComponent],
  imports: [
    CommonModule
  ],
  exports:[ProgressBarComponent, MusicFormComponent]
})
export class ComponentsModule { }
