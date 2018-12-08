import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'sa-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  username: string = sessionStorage.getItem('USERNAME');

  constructor(private router: Router) { }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/backend/login']);
  }

}
