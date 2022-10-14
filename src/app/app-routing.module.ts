import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicFormComponent } from './components/music-form/music-form.component';


const routes: Routes = [{
  path: '', component: MusicFormComponent

},
{
  path: 'list', component: MusicFormComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
