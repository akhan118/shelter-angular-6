import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '@appCore/services/login.service';
import { UserDetailsService } from '@appCore/services/user-details.service';

@Component({
  selector: 'sa-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSubmitting: boolean = false;
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private userDetails: UserDetailsService
  ) { }

  ngOnInit() {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      phone: ['', Validators.required],
      county: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  submitForm(form: FormGroup) {
    this.isSubmitting = true;
    const data = {
      name: form.value.name,
      address: form.value.street,
      city: form.value.city,
      state: form.value.state,
      phone: form.value.phone,
      county: form.value.county,
      email: form.value.email,
      zipCode: form.value.zipCode
    };
    this.loginService.signup(data)
      .subscribe((signupResponse) => {
        this.isSubmitting = false;

        this.router.navigate(['/backend/login'], {
          queryParams: { username: form.value.username, password: form.value.password }
        });
      },
        (error) => {
          this.isSubmitting = false;
          console.error('Error logging into app:', error);
        });
  }

}
