import { Component, OnInit } from '@angular/core';

import { ShelterService } from '@appCore/services/shelter.service';

@Component({
  selector: 'sa-availability',
  templateUrl: 'availability.component.html',
  styleUrls: ['./availability.component.css']
})

export class AvailabilityComponent implements OnInit {
  shelter: any;
  total: number = 0;
  occupied: number = 0;
  available: number = 0;

  constructor(private shelterService: ShelterService) { }

  ngOnInit() {
    this.total = 3;
    this.occupied = 2;
    this.available = this.total - this.occupied;
  }
}
