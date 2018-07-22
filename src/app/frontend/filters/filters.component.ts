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

  shelterTypes: ShelterType[] = [
    { value: 'Men', uiSelected: false },
    { value: 'Women', uiSelected: false },
    { value: 'Youth', uiSelected: false },
    { value: 'Family', uiSelected: false }
  ];

  selectedType: ShelterType;

  timeSlots: object[] = [
    { value: 5, uiSelected: false },
    { value: 10, uiSelected: false },
    { value: 15, uiSelected: false },
    { value: 20, uiSelected: false }
  ]

  constructor(private shelterTypeService: ShelterTypeService) { }

  applyFilters() {
    this.shelterTypeService.setShelterType(this.selectedType.value);
  }

  setShelterType(shelterType: ShelterType) {
    shelterType.uiSelected = !shelterType.uiSelected;
    this.selectedType = shelterType;
    this.resetShelterTypes(shelterType);

  }

  private resetShelterTypes(shelterType: ShelterType) {
    this.shelterTypes.forEach(type => {
      if (type.value !== shelterType.value) {
        type.uiSelected = false;
      }
    });
  }

}
