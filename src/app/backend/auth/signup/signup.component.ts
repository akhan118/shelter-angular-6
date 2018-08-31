import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ShelterService } from '@appCore/services/shelter.service';

@Component({
  selector: 'sa-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMsg: string = null;
  isSubmitting: boolean = false;
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shelterService: ShelterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.fb.group({
      shelterName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm(form) {
    this.errorMsg = null;
    this.isSubmitting = true;
    const data = {
      shelter_name: form.value.shelterName,
      email: form.value.email,
      username: form.value.username,
      password: form.value.password
    };
    this.shelterService.signup(data)
      .subscribe((signupResponse) => {
        if (signupResponse['signup'] === 'failed') {
          this.isSubmitting = false;
          this.errorMsg = 'There was an error signing you up.';
          return;
        }
        this.isSubmitting = false;
        localStorage.setItem('SHELTER_ID', signupResponse['new_shelter_id']);
        this.router.navigate(['/backend/login'], {
          queryParams: { username: form.value.username, password: form.value.password }
        });
      },
        (error) => {
          this.isSubmitting = false;
          console.error('Error logging into app.', error);
        });
  }

}
