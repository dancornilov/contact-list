import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

import { ListItem } from '@model/list-item.model';
import { Gender } from '@core/enums/gender.enum';
import { AppRoutes } from '@core/enums/app-routes.enum';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  public form: FormGroup;
  public genders: ListItem[];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly firestore: AngularFirestore,
    private readonly messageService: MessageService,
    private readonly router: Router
  ) {
    this.createForm();
  }

  public ngOnInit(): void {
    this.populateGenders();
  }

  public submit(): void {
    if (this.form.invalid) {
      this.messageService.add({ severity: 'warn', summary: 'Contact', detail: 'Please ensure that all validations passed!' });
      return;
    }

    this.firestore.collection('contacts').add(
      { ...this.form.value, created_at: new Date().getTime() })
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Contact', detail: 'Successfully was created!' });
        this.router.navigate(['/', AppRoutes.contact]);
      })
      .catch((error) => {
        this.messageService.add({ severity: 'error', summary: 'Contact', detail: 'Something went wrong!' });
      });
  }

  private populateGenders(): void {
    this.genders = Object.keys(Gender).map(key => ({ label: Gender[key], value: key }));
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      gender: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.compose([Validators.required, Validators.maxLength(11)])]
    });
  }
}
