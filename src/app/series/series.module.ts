import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series/series.component';
import { SeriesListComponent } from './series-list/series-list.component';

@NgModule({
  imports: [
    CommonModule,
    SeriesRoutingModule
  ],
  declarations: [SeriesComponent, SeriesListComponent]
})
export class SeriesModule { }
