import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from 'leaflet';
import { MymapComponent } from './mymap/mymap.component';

const routes: Routes = [
  {
    path:'',
    component: MymapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
