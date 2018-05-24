import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ShelterService } from '@appCore/services/shelter.service';
import { AUTOCOMPLETE_OPTION_HEIGHT } from '@angular/material';

@Component({
  selector: 'sa-availability',
  templateUrl: 'availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  public availableInput: FormControl = new FormControl();
  public occupiedInput: FormControl = new FormControl({
    value: 8,
    disabled: true
  });
  public totalInput: FormControl = new FormControl({
    value: 15,
    disabled: true
  });

  private available: number = 0;
  private originalValue: number = 0;

  constructor(private shelterService: ShelterService) {}

  ngOnInit() {
    this.available = this.totalInput.value - this.occupiedInput.value;
    this.availableInput.setValue(this.available);
    this.availableInput.disable();
  }

  activateEdit(inputField: FormControl) {
    this.originalValue = inputField.value;
    inputField.enable();
  }

  cancelEdit(inputField: FormControl) {
    inputField.setValue(this.originalValue);
    inputField.disable();
  }

  updateInputValue(inputField: FormControl) {
    console.log('UPDATE', inputField);
  }
}
