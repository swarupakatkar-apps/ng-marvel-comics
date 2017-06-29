import { CreatorComponent } from './creator/creator.component';
import { CreatorListComponent } from './creator-list/creator-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CreatorListComponent
  }, {
    path: ':id',
    component: CreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorsRoutingModule { }
