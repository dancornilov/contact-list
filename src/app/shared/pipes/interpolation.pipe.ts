import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interpolation'
})
export class InterpolationPipe implements PipeTransform {
  public transform(text: string = '', messages: any): string {
    const bracketValues = this.giveWords(text);

    if (bracketValues) {
      bracketValues.forEach(item => {
        const clearWord = this.giveWord(item);
        if (!messages[clearWord]) {
          messages[clearWord] = '';
        }

        text = text.replace(item, this.getColumnValue(messages, clearWord));
      });
    }
    return `${text}`;
  }

  private giveWords(text: string): string[] {
    const regExp = /\{\{(.+?)\}\}/ig;

    return text && text.match(regExp);
  }

  private giveWord(text: string): string {
    const regExp = /\{{(.*)\}}/i;

    return text && text.match(regExp)[1];
  }

  private getColumnValue(item: any, property: any): string {
    if (property.includes('.')) {
      return property.split('.').reduce((object, key) => object ? object[key] : '-', item);
    }

    return item[property];
  }
}
