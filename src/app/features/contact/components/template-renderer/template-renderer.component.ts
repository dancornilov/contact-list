import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppRoutes } from '@core/enums/app-routes.enum';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Template } from '@model/template.model';

@Component({
  selector: 'app-template-renderer',
  templateUrl: './template-renderer.component.html',
  styleUrls: ['./template-renderer.component.scss']
})
export class TemplateRendererComponent {
  public contact = {
    first_name: 'Dan',
    last_name: 'Cornilov',
    email: 'dancornilov@gmail.com',
    phone: '37376738799',
    gender: 'male'
  }
  public templateControl: FormControl = new FormControl('');
  private cardTemplateExists: boolean;

  constructor(
    private readonly firestore: AngularFirestore,
    private readonly messageService: MessageService,
    private readonly router: Router
  ) {
    this.getTemplate();
  }

  public submit(): void {
    const action = this.cardTemplateExists ? 'update' : 'set';

    this.firestore.collection('templates')
      .doc('card-template')[action]({ template: this.templateControl.value })
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Template', detail: 'Successfully was updated!' });
        this.router.navigate(['/', AppRoutes.contact]);
      })
      .catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Template', detail: 'Something went wrong!' });
      });
  }

  private getTemplate(): void {
    this.firestore.collection<Template>('templates').doc('card-template')
      .get().subscribe((doc) => {
      this.cardTemplateExists = doc.exists;

      if (doc.exists) {
        this.templateControl.setValue(doc.data().template);
      }
    });
  }
}
