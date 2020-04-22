import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Contact } from '@model/contact.model';
import { AppRoutes } from '@core/enums/app-routes.enum';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts$: Observable<Contact[]>;
  public AppRoutes: typeof AppRoutes = AppRoutes;

  constructor(
    private readonly firestore: AngularFirestore,
    private readonly router: Router
  ) {
  }

  public ngOnInit(): void {
    this.contacts$ = this.firestore.collection<Contact>('contacts').valueChanges();
  }

  public showCard(created: number): void {
    this.router.navigate(['/', AppRoutes.contact, AppRoutes.view, created]);
  }
}
