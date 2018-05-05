import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

import { ShelterService } from '@appCore/services/shelter.service';

export class Shelter extends Object {
  name: string;
  EIN: number;
  address: {
    street: string;
    zip: number;
  }
  phoneNumber: number;
}

@Component({
  selector: 'sa-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  currentShelter: Shelter;
  editing: boolean = false;
  profileForm: FormGroup;

  constructor(
    private shelterService: ShelterService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getShelter();
    this.createLoginForm();
  }

  submitForm(form: FormGroup) {

  }

  private getShelter() {
    this.shelterService.getShelter()
      .subscribe((shelterJSON: Shelter) => {
        this.currentShelter = shelterJSON;
        this.setFormValues(this.currentShelter);
      },
        error => console.log('Error getting shelter service:', error));
  }

  private createLoginForm() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      EIN: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        zip: ['', Validators.required]
      }),
      phoneNumber: ['', Validators.required]
    })
  }

  private setFormValues(shelter: Shelter) {
    this.profileForm.setValue({
      name: shelter.name,
      EIN: shelter.EIN,
      address: {
        street: shelter.address.street,
        zip: shelter.address.zip
      },
      phoneNumber: shelter.phoneNumber
    })
  }



}
