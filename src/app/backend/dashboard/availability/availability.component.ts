import { Component, OnInit } from '@angular/core';

import { ShelterService } from '@appCore/services/shelter.service';

@Component({
  selector: 'sa-availability',
  templateUrl: 'availability.component.html',
  styleUrls: ['./availability.component.css']
})

export class AvailabilityComponent implements OnInit {
  shelter: any;

  constructor(private shelterService: ShelterService) { }

  ngOnInit() { }
}