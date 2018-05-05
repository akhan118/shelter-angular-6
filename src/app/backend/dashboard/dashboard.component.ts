import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '@appCore/services/user-details.service';

@Component({
  selector: 'sa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navLinks: object[] = [
    { name: 'availability', url: '/backend/dashboard/availability' },
    { name: 'profile', url: '/backend/dashboard/profile' },
    { name: 'settings', url: '/backend/dashboard/settings' }
  ];
  username: string = null;

  constructor(private userDetails: UserDetailsService) { }

  ngOnInit() {
    this.username = this.userDetails.username;
  }

}
