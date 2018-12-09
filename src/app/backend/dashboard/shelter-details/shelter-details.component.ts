import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Shelter } from 'app/models/Shelter';
import { ShelterService } from '@appCore/services/shelter.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'sa-shelter-details',
  templateUrl: 'shelter-details.component.html',
  styleUrls: ['./shelter-details.component.css']
})

export class ShelterDetailsComponent implements OnInit {
  currentShelter: Shelter;
  editing: boolean = false;
  initialFormValues: object;
  isSubmitting: boolean = false;
  shelterForm: FormGroup;
  shelterTypes: object[] = [
    { id: 1, name: 'Woman' },
    { id: 2, name: 'Men' },
    { id: 3, name: 'Youth' },
    { id: 4, name: 'Family' },
    { id: 5, name: 'All' }
  ];

  constructor(private fb: FormBuilder, private shelterService: ShelterService) { }

  ngOnInit() {
    this.createShelterForm();

  }

  toggleEditing() {
    this.editing = !this.editing;
    if (!this.editing) {
      this.shelterForm.disable();
    } else {
      this.editing = false;
      this.shelterForm.reset();
      this.shelterForm.enable();
    }
  }

  submitForm() {
    this.isSubmitting = true;
    const form: FormGroup['controls'] = this.shelterForm.controls;
    const formData = {
      shelter_id: localStorage.getItem('SHELTER_ID'),
      shelter_name: form.name.value,
      shelter_EIN: form.EIN.value,
      shelter_address: form.address.value,
      shelter_address_county: form.county.value,
      shelter_address_city: form.city.value,
      shelter_address_state: form.state.value,
      shelter_address_zip: form.zipCode.value,
      shelter_phone: form.phone.value
    };

    this.shelterService.updateShelter(formData).subscribe(updateResponse => {
      console.info('Updating Shelter Details');
    }, (error: HttpErrorResponse) => {
      console.error('There was an error updating the shelter details.');
    });
  }

  private createShelterForm() {
    // Create shelter form using FormBuilder module
    this.shelterForm = this.fb.group({
      name: ['', Validators.required],
      EIN: ['', Validators.required],
      shelterType: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      county: ['', Validators.required],
      phone: ['', Validators.required]
    });

    // Disable form initially until user clicks 'edit' button
    this.shelterForm.disable();
  }

}
