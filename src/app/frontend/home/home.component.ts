import { Component, OnInit } from '@angular/core';

import { ShelterService } from '@appCore/services/shelter.service';
import { ShelterTypeService } from '@appCore/services/shelter-type.service';

export class Shelter extends Object {
  id: number;
  name: string;
  EIN: number;
  address: {
    street: string;
    zip: number;
  }
  phoneNumber: number;
}

@Component({
  selector: 'sa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public shelterTypes: string[] = ['All', 'Men', 'Women', 'Youth', 'Family']

  constructor(private shelterTypeService: ShelterTypeService) { }

  public setShelterType(shelterType: string) {
    this.shelterTypeService.setShelterType(shelterType);
  }
}
