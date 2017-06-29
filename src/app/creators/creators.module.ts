import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorComponent } from './creator/creator.component';
import { CreatorListComponent } from './creator-list/creator-list.component';

@NgModule({
  imports: [
    CommonModule,
    CreatorsRoutingModule
  ],
  declarations: [CreatorComponent, CreatorListComponent]
})
export class CreatorsModule { }
