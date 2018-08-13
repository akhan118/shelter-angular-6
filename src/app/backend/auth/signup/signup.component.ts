import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '@appCore/services/login.service';
import { signUpShelterService } from '@appCore/services/signUpShelter.service';
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
    private signupshelterService: signUpShelterService,
    private router: Router,
    private userDetails: UserDetailsService
  ) { }

  ngOnInit() {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.fb.group({
      shelterName: ['', Validators.required ],
      username: ['', Validators.required ],
      password: ['', Validators.required ],
      street: ['', Validators.required ],
      city: ['', Validators.required ],
      state: ['', Validators.required ],
      zipCode: ['', Validators.required ],
      phone: ['', Validators.required ],
      county: ['', Validators.required ],
      email: ['', Validators.required ],
      EIN: ['', Validators.required ]
    });
  }

  submitForm(form) {
    console.log(form);
    this.isSubmitting = true;
    const data = {
      shelter_name: form.value.shelterName,
      email: form.value.email,
      username: form.value.username,
      password: form.value.password

    };


    console.log(data);
    this.signupshelterService.signUpShelter(data)
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
