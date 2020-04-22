import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactLayoutComponent } from './layouts/contact-layout/contact-layout.component';
import { UnselectedComponent } from './components/unselected/unselected.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

const routes: Routes = [
  {
    path: '',
    component: ContactLayoutComponent,
    children: [
      {
        path: '',
        component: UnselectedComponent
      },
      {
        path: 'detail',
        component: ContactDetailComponent
      },
      {
        path: 'detail/:id',
        component: ContactDetailComponent
      },
      {
        path: 'view/:id',
        component: ContactCardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
