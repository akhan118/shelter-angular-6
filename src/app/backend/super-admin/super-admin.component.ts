import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sa-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  shelters = [
      {
        'id': 1,
        'shelter_name': 'Helping Hands West',
        'shelter_address': '2143 Livernois',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48221,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 60,
        'shelter_type': {
          'id': 3,
          'name': 'Youth'
        },
        'status': 'pending'
      },
      {
        'id': 1,
        'shelter_name': 'Gentlemen of Society',
        'shelter_address': '2143 Livernois',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48221,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 13,
        'shelter_type': {
          'id': 2,
          'name': 'Men'
        },
        'status': 'pending'
      },
      {
        'id': 1,
        'shelter_name': 'Great Lakes Mission',
        'shelter_address': '48221 Livernois',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48238,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 14,
        'shelter_type': {
          'id': 2,
          'name': 'Men'
        },
        'status': 'pending'
      },
      {
        'id': 1,
        'shelter_name': 'St. Mary\'s Home',
        'shelter_address': '45321 Outer Drive',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48221,
        'shelter_phone': 3134819231,
        'available': 0,
        'last_updated': 2,
        'shelter_type': {
          'id': 4,
          'name': 'Family'
        },
        'status': 'pending'
      },
      {
        'id': 1,
        'shelter_name': 'A Child\'s Place',
        'shelter_address': '2143 West 7 Mile',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48212,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 6,
        'shelter_type': {
          'id': 3,
          'name': 'Youth'
        },
        'status': 'active'
      },
      {
        'id': 1,
        'shelter_name': 'Happy Beginnings Shelter',
        'shelter_address': '2738 W. Davison',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48220,
        'shelter_phone': 3134819231,
        'available': 0,
        'last_updated': 7,
        'shelter_type': {
          'id': 1,
          'name': 'Women'
        },
        'status': 'active'
      },
      {
        'id': 1,
        'shelter_name': 'Family First',
        'shelter_address': '7177 Fenkell',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48122,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 8,
        'shelter_type': {
          'id': 4,
          'name': 'Family'
        },
        'status': 'inactive'
      },
      {
        'id': 1,
        'shelter_name': 'Helping Hands East',
        'shelter_address': '6842 St. Jean',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48223,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 1,
        'shelter_type': {
          'id': 3,
          'name': 'Youth'
        },
        'status': 'inactive'
      },
      {
        'id': 1,
        'shelter_name': 'David Douglas Men\'s Shelter',
        'shelter_address': '2143 Linwood',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48221,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 20,
        'shelter_type': {
          'id': 2,
          'name': 'Men'
        },
        'status': 'inactive'
      },
      {
        'id': 1,
        'shelter_name': 'Second Chance',
        'shelter_address': '214 Pontchartrain',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48223,
        'shelter_phone': 3134819212,
        'available': 1,
        'last_updated': 12,
        'shelter_type': {
          'id': 2,
          'name': 'Men'
        },
        'status': 'active'
      },
      {
        'id': 1,
        'shelter_name': 'City Impact',
        'shelter_address': '223841 Houston Whitter',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48231,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 5,
        'shelter_type': {
          'id': 1,
          'name': 'Women'
        },
        'status': 'active'
      },
      {
        'id': 1,
        'shelter_name': 'Southwest Shelter',
        'shelter_address': '29316 Livernois',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48221,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 9,
        'shelter_type': {
          'id': 1,
          'name': 'Women'
        },
        'status': 'active'
      },
      {
        'id': 1,
        'shelter_name': 'Gracie\'s Gift',
        'shelter_address': '3412 Chene',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48221,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 3,
        'shelter_type': {
          'id': 3,
          'name': 'Youth'
        },
        'status': 'active'
      },
      {
        'id': 1,
        'shelter_name': 'A Place to Call Home Women\'s Shelter',
        'shelter_address': '611 Woodward',
        'shelter_address_city': 'Detroit',
        'shelter_address_state': 'MI',
        'shelter_address_zip': 48202,
        'shelter_phone': 3134819231,
        'available': 1,
        'last_updated': 18,
        'shelter_type': {
          'id': 1,
          'name': 'Women'
        },
        'status': 'inactive'
      }
  ];
  statuses: string[] = ['pending', 'active', 'inactive'];
  statusForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createStatusForm();
  }

  createStatusForm() {
    this.statusForm = this.fb.group({
      statusCtrl: [this.statuses[0]]
    });
  }

  updateStatus() {
    console.info('status value', this.statusForm.controls['status'].value);
  }

}
