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
  isSubmitting: boolean = false;
  userInfoForm: FormGroup;

  constructor(
    private shelterService: ShelterService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // When component is initialized create UserInfo form
    this.createUserInfoForm();
  }

  disableForm() {
    this.editing = !this.editing;
    this.editing === false ? this.userInfoForm.disable() : this.userInfoForm.enable();
  }

  submitForm(form: FormGroup) {
    // Simulate submitting form
    console.info('submitted user info form', form);
    setTimeout(() => {
      this.isSubmitting = true;
    }, 4000);
  }

  private createUserInfoForm() {
    // Create userInfo FormGroup using FormBuilder module
    this.userInfoForm = this.fb.group({
      username: ['mchilds', Validators.required],
      email: ['mchilds@helpinghanddetroit.com', [Validators.required, Validators.email]],
      password: ['password', Validators.required]
    });

    // Disable form initially until user clicks 'edit' button
    this.userInfoForm.disable();
  }

}
