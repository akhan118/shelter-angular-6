import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserDetailsService } from '@appCore/services/user-details.service';

@Component({
  selector: 'sa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = null;

  constructor(private router: Router, private userDetails: UserDetailsService) { }

  ngOnInit() {
    this.username = this.userDetails.username;
  }

  logout() {
    this.router.navigate(['/backend/login']);
  }

}
