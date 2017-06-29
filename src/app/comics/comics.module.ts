import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicComponent } from './comic/comic.component';
import { ComicListComponent } from './comic-list/comic-list.component';

@NgModule({
  imports: [
    CommonModule,
    ComicsRoutingModule
  ],
  declarations: [ComicComponent, ComicListComponent]
})
export class ComicsModule { }
