import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  }, {
    path: 'characters',
    loadChildren: './characters/characters.module#CharactersModule'
  }, {
    path: 'comics',
    loadChildren: './comics/comics.module#ComicsModule'
  }, {
    path: 'creators',
    loadChildren: './creators/creators.module#CreatorsModule'
  }, {
    path: 'events',
    loadChildren: './events/events.module#EventsModule'
  }, {
    path: 'series',
    loadChildren: './series/series.module#SeriesModule'
  }, {
    path: 'stories',
    loadChildren: './stories/stories.module#StoriesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
