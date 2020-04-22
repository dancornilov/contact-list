import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from '@model/contact.model';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  public transform(contact: Contact): string {
    return `${contact.first_name} ${contact.last_name}`;
  }
}
