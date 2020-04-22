import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactLayoutComponent } from './layouts/contact-layout/contact-layout.component';
import { UnselectedComponent } from './components/unselected/unselected.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule, CardModule, KeyFilterModule, ListboxModule, RadioButtonModule } from 'primeng/primeng';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactDetailComponent,
    ContactCardComponent,
    ContactLayoutComponent,
    UnselectedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule,
    KeyFilterModule,
    ButtonModule,
    AngularFirestoreModule,
    CardModule,
    ListboxModule
  ]
})
export class ContactModule {
}
