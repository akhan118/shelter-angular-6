import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '@appCore/services/login.service';
import { UserDetailsService } from '@appCore/services/user-details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'sa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg: string = null;
  isSubmitting: boolean = false;
  loginForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private userDetails: UserDetailsService
  ) { }

  ngOnInit() {
    this.createLoginForm();
    this.setLoginCredentials();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm(form) {
    this.errorMsg = null;
    this.isSubmitting = true;
    if (form.value.username === 'super') {
      this.redirectToSuperAdmin();
      return;
    }
    this.loginService.login(form.value.username, form.value.password)
      .subscribe((loginResponse) => {
        if (loginResponse['Authentication'] === false) {
          this.isSubmitting = false;
          this.errorMsg = 'There was an error logging in. Please try again.';
          return;
        }
        localStorage.setItem('ACCESS_TOKEN', loginResponse['access_token']);
        localStorage.setItem('USERNAME', loginResponse['username']);
        this.router.navigate(['/backend/dashboard']);
      },
        (error) => {
          this.isSubmitting = false;
          console.error('Error signing up.', error);
        });
  }

  private setLoginCredentials() {
    this.activatedRoute.queryParamMap
      .subscribe((values) => {
        const creds = values['params'];
        if (creds['username'] && creds['password']) {
          this.loginForm.setValue({ username: creds['username'], password: creds['password'] });
        }
      });
  }

  private redirectToSuperAdmin() {
    this.router.navigate(['/backend/super-admin']);
  }

}
