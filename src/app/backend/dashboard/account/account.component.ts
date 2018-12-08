import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

import { ShelterService } from '@appCore/services/shelter.service';

export class Shelter extends Object {
  name: string;
  EIN: number;
  address: {
    street: string;
    zip: number;
  };
  phoneNumber: number;
}

@Component({
  selector: 'sa-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  currentShelter: Shelter;
  editing: boolean = false;
  isSubmitting: boolean = false;
  accountInfoForm: FormGroup;

  constructor(
    private shelterService: ShelterService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // When component is initialized create UserInfo form
    this.createAccountInfoForm();
  }

  toggleEditing() {
    this.editing = !this.editing;
    if (!this.editing) {
      this.accountInfoForm.disable();
    } else {
      this.accountInfoForm.reset();
      this.accountInfoForm.enable();
    }
  }

  submitForm(form: FormGroup) {
    // Simulate submitting form
    console.info('submitted user info form', form);
    setTimeout(() => {
      this.isSubmitting = true;
    }, 4000);
  }

  private createAccountInfoForm() {
    const username: string = localStorage.getItem('USERNAME');
    // Create userInfo FormGroup using FormBuilder module
    this.accountInfoForm = this.fb.group({
      username: [username, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Disable form initially until user clicks 'edit' button
    this.accountInfoForm.disable();
  }

}
