
import { Component, OnInit } from '@angular/core';
import { ShelterService } from '@appCore/services/shelter.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';


@Component({
    selector: 'app-shelters-signup',
    templateUrl: 'shelters-signup.component.html',
    styleUrls: ['./shelters-signup.component.css']
})

export class SheltersSignupComponent implements OnInit {

public shelterName: string;
public shelterAddressNumber: number;
public shelterCity: string;
public shelterState: number;
public shelterTel: number;

    constructor(
        private _activated: ActivatedRoute,
        private _shelterService: ShelterService,
        public snackBar: MatSnackBar
    ) { }

    ngOnInit() {
      console.log('YO');
    }

  public  save() {
    const data = {
      shelter_name: this.shelterName,
      shelter_address: this.shelterAddressNumber,
      shelter_address_city: this.shelterCity,
      shelter_address_state: this.shelterState,
      shelter_phone: this.shelterTel
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
