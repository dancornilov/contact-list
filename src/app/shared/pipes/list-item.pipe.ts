import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'listItem'
})
export class ListItemPipe implements PipeTransform {
  public transform(observableValue: Observable<any>, label: string[], value: string): Observable<any> {
    return observableValue.pipe(
      map(result => result.map(item => {
          const complexLabel = label.reduce((acc, labelProperty) => acc += ` ${item[labelProperty]}`, '');

          return { label: complexLabel, value: item[value] };
        }
      ))
    );
  }
}
