import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemPipe } from './pipes/list-item.pipe';
import { FullNamePipe } from './pipes/full-name.pipe';

@NgModule({
  declarations: [
    ListItemPipe,
    FullNamePipe
  ],
  exports: [
    ListItemPipe,
    FullNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
