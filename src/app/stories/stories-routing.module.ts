import { StoryComponent } from './story/story.component';
import { StoryListComponent } from './story-list/story-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StoryListComponent
  }, {
    path: ':id',
    component: StoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
