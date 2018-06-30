import { Component } from '@angular/core';

import { ShelterTypeService } from '@appCore/services/shelter-type.service';

class ShelterType extends Object {
  value: 'All' | 'Men' | 'Women' | 'Youth' | 'Family';
  uiSelected: boolean;
}

@Component({
  selector: 'sa-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent {
  public shelterTypes: ShelterType[] = [
    { value: 'Men', uiSelected: false },
    { value: 'Women', uiSelected: false },
    { value: 'Youth', uiSelected: false },
    { value: 'Family', uiSelected: false }
  ];

  public timeSlots: Array<Object> = [
    { value: 5, uiSelected: false },
    { value: 10, uiSelected: false },
    { value: 15, uiSelected: false },
    { value: 20, uiSelected: false }
  ]

  constructor(private shelterTypeService: ShelterTypeService) { }

  public setShelterType(shelterType: ShelterType) {
    this.resetShelterTypes(shelterType);
    shelterType.uiSelected = !shelterType.uiSelected;
    this.shelterTypeService.setShelterType(shelterType.value);
  }

  private resetShelterTypes(shelterType: ShelterType) {
    return this.shelterTypes.filter(type => {
      console.log('type', type)
      type.value === shelterType.value
      type.uiSelected = false
    });
  }

}
