import { Component, OnInit } from '@angular/core';

import { UserDetailsService } from '@appCore/services/user-details.service';
import { MenuService } from '@appCore/services/menu.service';

@Component({
  selector: 'sa-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  username: string = localStorage.getItem('USERNAME');

  constructor(private menuService: MenuService, private userDetails: UserDetailsService) { }

  ngOnInit() {
    //this.username = this.userDetails.username;
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

}
