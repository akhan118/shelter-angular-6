import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ShelterService } from '@appCore/services/shelter.service';

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

  enableEdit(inputField: FormControl) {
    this.originalValue = inputField.value;
    inputField.enable();
  }

  cancelEdit(inputField: FormControl) {
    inputField.setValue(this.originalValue);
    inputField.disable();
  }

  updateAvailableValue() {
    let occupiedValue: number = 0;
    occupiedValue = this.totalInput.value - this.availableInput.value;
    this.occupiedInput.setValue(occupiedValue);
    this.availableInput.disable();
  }

  updateOccupiedValue() {
    let availableValue: number = 0;
    availableValue = this.totalInput.value - this.occupiedInput.value;
    this.availableInput.setValue(availableValue);
    this.occupiedInput.disable();
  }
}
