import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoryComponent } from './story/story.component';
import { StoryListComponent } from './story-list/story-list.component';

@NgModule({
  imports: [
    CommonModule,
    StoriesRoutingModule
  ],
  declarations: [StoryComponent, StoryListComponent]
})
export class StoriesModule { }
