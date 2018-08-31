import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ShelterService } from '@appCore/services/shelter.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'sa-availability',
  templateUrl: 'availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  availability: FormControl = new FormControl();
  lastUpdated: string = formatDate(Date.now(), 'short', 'en-US');

  constructor(private shelterService: ShelterService) { }

  ngOnInit() {
    this.updateTime();
  }

  set inputValue(val: boolean) {
    this.availability.patchValue({ value: val });
  }

  get inputValue(): boolean {
    return this.availability.value;
  }

  private updateTime() {
    this.availability.valueChanges.subscribe(val => {
      this.lastUpdated = formatDate(Date.now(), 'short', 'en-US');
    });
  }
}
