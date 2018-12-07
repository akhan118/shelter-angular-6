import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'sa-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements AfterViewInit  {
  showBanner: boolean;
  constructor(private router: Router) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.showBanner = true;
    }, 3000);
  }

}
