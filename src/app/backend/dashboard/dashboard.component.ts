import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ShelterService } from '@appCore/services/shelter.service';

@Component({
  selector: 'sa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements AfterViewInit {
  showBanner: boolean;
  constructor(private router: Router, private shelterService: ShelterService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.showBanner = true;
    }, 3000);
  }

}
