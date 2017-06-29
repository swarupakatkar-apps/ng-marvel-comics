import { ComicComponent } from './comic/comic.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ComicListComponent
  }, {
    path: ':id',
    component: ComicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
