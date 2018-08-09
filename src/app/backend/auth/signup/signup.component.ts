import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '@appCore/services/login.service';
import { signUpShelterService } from '@appCore/services/signupshelter.service';
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
    private signUpShelterService: signUpShelterService,
    private router: Router,
    private userDetails: UserDetailsService
  ) { }

  ngOnInit() {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required ],
      password:['', Validators.required ],
      street: ['', Validators.required ],
      city: ['', Validators.required ],
      state: ['', Validators.required ],
      zipCode: ['', Validators.required ],
      phone: ['', Validators.required ],
      county: ['', Validators.required ],
      email: ['', Validators.required ]
    });
  }

  submitForm(form) {
    console.log(form)
    this.isSubmitting = true;
    const data = {
      shelter_name: form.value.username,
      shelter_address: form.value.street,
      shelter_address_city: form.value.city,
      shelter_address_state: form.value.state,
      shelter_phone: form.value.phone,
      shelter_county: form.value.county,
      shelter_email: form.value.email,
      shelter_zipCode: form.value.zipCode
    };
    this.signUpShelterService.signUpShelter(data)
      .subscribe((signupResponse) => {
        console.log(signupResponse);
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
