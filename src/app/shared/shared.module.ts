import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemPipe } from './pipes/list-item.pipe';
import { FullNamePipe } from './pipes/full-name.pipe';
import { InterpolationPipe } from './pipes/interpolation.pipe';

@NgModule({
  declarations: [
    ListItemPipe,
    FullNamePipe,
    InterpolationPipe
  ],
  exports: [
    ListItemPipe,
    FullNamePipe,
    InterpolationPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
