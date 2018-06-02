import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sheltersFilter'
})

export class SheltersFilterPipe implements PipeTransform {
  transform(shelters: any, filterValue: string, filterAttribute: string = 'name'): any {
    let filteredShelters: any[] = [];
    if (!filterValue) {
      return shelters;
    }

    return shelters.filter(shelter => {
      let lowerCaseFilterAttr: string = shelter[filterAttribute].toLocaleLowerCase();
      let lowerCaseFilterValue: string = filterValue.toLocaleLowerCase();
      return lowerCaseFilterAttr.includes(lowerCaseFilterValue);
    });
  }
}