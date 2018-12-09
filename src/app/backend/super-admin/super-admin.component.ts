import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ShelterService } from '@appCore/services/shelter.service';
import { Shelter } from 'app/models/Shelter';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sa-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  errorMsg: string = null;
  isLoading: boolean = false;
  shelters: Shelter[] = [];
  submitting: boolean = false;
  subscription: Subscription;
  fakeShelters: Shelter[] = [
    {
      "shelter_id": "26",
      "shelter_name": "shelter600",
      "shelter_address": "",
      "shelter_address_city": "",
      "shelter_address_state": "",
      "shelter_address_zip": "",
      "shelter_county": "",
      "shelter_phone": "0",
      "shelter_email": "shelter600",
      "shelter_EIN": "0",
      "shelter_long": "0",
      "shelter_lat": "0",
      "username": "shelter6000",
      "shelter_approved": "0",
      "userId": "0"
    },
    {
      "shelter_id": "27",
      "shelter_name": "Malcolm's ",
      "shelter_address": "",
      "shelter_address_city": "",
      "shelter_address_state": "",
      "shelter_address_zip": "",
      "shelter_county": "",
      "shelter_phone": "0",
      "shelter_email": "email@emai",
      "shelter_EIN": "0",
      "shelter_long": "0",
      "shelter_lat": "0",
      "username": "user",
      "shelter_approved": "1",
      "userId": "0"
    }
  ];

  constructor(private shelterService: ShelterService) { }

  ngOnInit() {
    this.getShelters();
  }

  getShelters() {
    this.isLoading = true;
    this.subscription = this.shelterService.getSheltersWithStatus().subscribe(
      sheltersResponse => {
        this.isLoading = false;
        this.shelters = this.fakeShelters
      }, (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.errorMsg = 'Error getting shelters. Reload the page and try again.';
      }
    );
  }

  update(statusValue: string) {
    this.errorMsg = null;
    this.submitting = true;
    const shelterId: string = sessionStorage.getItem('SHELTER_ID') || '0';
    this.shelterService.updateShelterStatus(statusValue, shelterId)
      .subscribe((updateSuccess) => {
        console.info('update successful');
        this.submitting = false;
      }, (error: HttpErrorResponse) => {
        console.error('Error updating shelter status.', error);
        this.submitting = false;
        this.errorMsg = 'Error updating shelter status. Try again';
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
