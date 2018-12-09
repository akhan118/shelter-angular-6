import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ShelterService } from '../../../core/services/shelter.service';
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
  @Input() shelter: Shelter;
  errorMessage: string = null;
  statusForm: FormGroup;
  isSubmitting: boolean = false;
  statuses: Array<{ id: string, name: string }> = [
    { id: '0', name: 'pending' },
    { id: '1', name: 'active' },
    { id: '2', name: 'inactive' }
  ];

  constructor(private fb: FormBuilder, private shelterService: ShelterService) { }

  ngOnInit() {
    this.createStatusForm();
  }

  createStatusForm() {
    const statusIndex: number = this.getStatusIndex(this.shelter.shelter_approved);
    this.statusForm = this.fb.group({
      status: [this.statuses[statusIndex]]
    });
  }

  updateStatus() {
    const statusId: string = this.statusForm.controls['status'].value.id;
    this.errorMessage = null;
    this.isSubmitting = true;
    this.shelterService.updateShelterStatus(statusId, this.shelter.shelter_id)
      .subscribe(updateSuccess => {
        console.info('update successful');
        this.isSubmitting = false;
      }, error => {
        console.error('Error updating shelter status.');
        this.isSubmitting = false;
        this.errorMessage = 'Error updating shelter status. Try again';
      });
  }

  private getStatusIndex(shelterId: string): number {
    return this.statuses.findIndex(status => status.id === shelterId);
  }

}
