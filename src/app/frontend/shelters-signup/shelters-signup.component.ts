
import { Component, OnInit } from '@angular/core';
import { ShelterService } from '@appCore/services/shelter.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-shelters-signup',
    templateUrl: 'shelters-signup.component.html',
    styleUrls: ['./shelters-signup.component.css']
})

export class SheltersSignupComponent implements OnInit {
  signUpForm: FormGroup; 
  
public shelterName: string;
public shelterAddressNumber: number;
public shelterCity: string;
public shelterState: number;
public shelterTel: number;
public shelterCounty: string;
public shelterEmail: string;

    constructor(
        private _activated: ActivatedRoute,
        private _shelterService: ShelterService,
        public snackBar: MatSnackBar,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
      console.log('YO');
      this.createForm()
    }
    createForm() {
      this.signUpForm = this.fb.group({
        name: ['', Validators.required ],
        street: ['', Validators.required ],
        city: ['', Validators.required ],
        state: ['', Validators.required ],
        zipCode: ['', Validators.required ],
        phone: ['', Validators.required ],
        county: ['', Validators.required ],
        email: ['', Validators.required ],
      });
    }
  public  save(form) {
    console.log(form.value)
    const data = {
      shelter_name: form.value.name,
      shelter_address: form.value.street,
      shelter_address_city: form.value.city,
      shelter_address_state: form.value.state,
      shelter_phone: form.value.phone,
      shelter_county: form.value.county,
      shelter_email: form.value.email,
      shelter_zipCode: form.value.zipCode
    };
console.log(data);

this._shelterService.signupShelters(data)
  .subscribe(result => {
    console.log(result);
  });
  this.snackBar.open('Saved ', 'close', {
    duration: 2000,
  });
}


}
