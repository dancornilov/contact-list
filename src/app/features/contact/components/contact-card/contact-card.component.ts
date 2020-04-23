import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { Contact } from '@model/contact.model';
import { Template } from '@model/template.model';
import { AppRoutes } from '@core/enums/app-routes.enum';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit, OnDestroy {
  public created: number;
  public templateDoc: Template;
  public AppRoutes: typeof AppRoutes = AppRoutes;
  public contact$: Observable<Contact>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly firestore: AngularFirestore,
    private readonly route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(() => {
      this.created = +this.route.snapshot.paramMap.get('id');
      this.getContact();
    });
  }

  public ngOnInit(): void {
    this.getTemplate();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private getContact(): void {
    this.contact$ = this.firestore.collection<Contact>('contacts',
      ref => ref.where('created_at', '==', this.created)
        .limit(1)).valueChanges().pipe(flatMap(result => result));
  }

  private getTemplate(): void {
    this.firestore.collection<Template>('templates').doc('card-template')
      .get().subscribe((doc) => {
      if (doc.exists) {
        this.templateDoc = doc.data() as Template;
      } else {
        console.log("No such document!");
      }
    });
  }
}
