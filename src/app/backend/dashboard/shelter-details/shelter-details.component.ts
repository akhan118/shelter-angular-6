import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

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

  // Placeholder for real data that we would
  // get from the api
  initialFormValues: object = {
    shelterType: { id: 2, name: 'Men' },
    address: '1234 Main St.',
    city: 'Detroit',
    state: 'MI',
    phone: '313-421-5721',
    county: 'wayne',
    zipCode: 48202
  };
  isSubmitting: boolean = false;
  shelterForm: FormGroup;
  shelterTypes: object[] = [
    { id: 1, name: 'Woman' },
    { id: 2, name: 'Men' },
    { id: 3, name: 'Youth' },
    { id: 4, name: 'Family' },
    { id: 5, name: 'All' }
  ]

  constructor(private fb: FormBuilder, private shelterService: ShelterService) { }

  ngOnInit() {
    this.createShelterForm();
  }

  disableForm() {
    const editableFields: any = this.shelterForm.controls['editableFields'];
    this.editing = !this.editing;
    if (this.editing === false) {
      editableFields.disable();
      editableFields.setValue(this.initialFormValues);
    } else {
      editableFields.enable();
    }
  }

  submitForm() {
    this.isSubmitting = true;
    const form: FormGroup['controls'] = this.shelterForm.controls;
    const data = {
      shelter_id: localStorage.getItem('SHELTER_ID'),
      shelter_name: form.name.value,
      shelter_EIN: form.EIN.value,
      shelter_address: form.editableFields.value.address,
      shelter_address_county: form.editableFields.value.county,
      shelter_address_city: form.editableFields.value.city,
      shelter_address_state: form.editableFields.value.state,
      shelter_address_zip: form.editableFields.value.zipCode,
      shelter_phone: form.editableFields.value.phone
    };

    console.log('Data', data);
    this.shelterService.updateShelter(data).subscribe(updateResponse => {
      console.log('FORM UPDATED!')
    }, (error: HttpErrorResponse) => {
      console.error('There was an error updating the shelter details.')
    })
  }

  private createShelterForm() {
    // Create shelter form using FormBuilder module
    this.shelterForm = this.fb.group({
      name: ['Helping Hands Detroit', Validators.required],
      EIN: ['12345678', Validators.required],
      // Nested formGroup within the shelter form
      editableFields: this.fb.group({
        shelterType: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
        county: ['', Validators.required],
        phone: ['', Validators.required]
      })
    });
    // Sets the initial values of the shelter
    this.shelterForm.controls.editableFields.setValue(this.initialFormValues);

    // Disable form initially until user clicks 'edit' button
    this.shelterForm.disable();
  }

}