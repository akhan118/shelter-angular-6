import { Component, OnInit } from '@angular/core';

import { ShelterService } from '@appCore/services/shelter.service';
import { Shelter } from 'app/models/Shelter';
import { Observable } from 'rxjs';


@Component({
  selector: 'sa-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  errorMessage: string = null;
  shelters: amy[];
  submitting: boolean = false;

  constructor(private shelterService: ShelterService) { }

  ngOnInit() {
    this.getShelters();
  }

  getShelters() {
    this.shelterService.getSheltersWithStatus().subscribe(
    	sheltersResponse => this.shelters = sheltersResponse[1];
    );
  }

  update(statusValue: string) {
    this.errorMessage = null;
    this.submitting = true;
    const shelterId: string = sessionStorage.getItem('SHELTER_ID') || '0';
    this.shelterService.updateShelterStatus(statusValue, shelterId)
      .subscribe(updateSuccess => {
        console.info('update successful');
        this.submitting = false;
      }, error => {
        console.error('Error updating shelter status.');
        this.submitting = false;
        this.errorMessage = 'Error updating shelter status. Try again';
      });
  }

}
