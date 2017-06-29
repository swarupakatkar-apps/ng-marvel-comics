import { SeriesComponent } from './series/series.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SeriesListComponent
  }, {
    path: ':id',
    component: SeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
