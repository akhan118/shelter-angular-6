import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { Shelter } from 'app/models/Shelter';

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
    availability: false,
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

  constructor(private fb: FormBuilder) { }

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

  submitForm(form: FormGroup) {
    // Simulate submitting form
    console.info('submitted user info form', form);
    setTimeout(() => {
      this.isSubmitting = true;
    }, 4000);

    const data = {
      name: form.controls.name.value,
      EIN: form.controls.EIN.value,
      availability: form.value.editableFields.availability,
      address: form.value.editableFields.address,
      city: form.value.editableFields.city,
      state: form.value.editableFields.state,
      phone: form.value.editableFields.phone,
      county: form.value.editableFields.county,
      zipCode: form.value.editableFields.zipCode
    };

    console.log('Data', data);
  }

  private createShelterForm() {
    // Create shelter form using FormBuilder module
    this.shelterForm = this.fb.group({
      name: ['Helping Hands Detroit', Validators.required],
      EIN: ['12345678', Validators.required],
      // Nested formGroup within the shelter form
      editableFields: this.fb.group({
        availability: [false, Validators.required],
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