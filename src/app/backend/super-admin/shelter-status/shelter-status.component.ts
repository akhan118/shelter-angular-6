import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { Shelter } from 'app/models/Shelter';

enum StatusType {
  pending = 1,
  active,
  inactive
}

@Component({
  selector: 'sa-shelter-status',
  templateUrl: 'shelter-status.component.html',
  styleUrls: ['./shelter-status.component.css']
})

export class ShelterStatusComponent implements OnInit {
  @Input() shelter: Shelter & {shelter_approved: string};

  statusForm: FormGroup;
  statuses: Array<{id: string, name: string}> = [
    {id: '1', name: 'pending'},
    {id: '2', name: 'active'},
    {id: '3', name: 'inactive'}
  ];
  statusObj = {
   '1': 'pending',
   '2': 'active',
   '3': 'inactive'
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createStatusForm();
  }

  createStatusForm() {
    this.statusForm = this.fb.group({
      status: [this.statuses[0]]
    });
  }

  updateStatus() {
    console.info('form value', this.statusForm.controls['status'])
    return;
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

  convertStatus(shelterId) {
    return this.statusObj(shelterId);
  }

}
