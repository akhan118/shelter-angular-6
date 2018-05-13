
import { Component, OnInit } from '@angular/core';
import { ShelterService } from '@appCore/services/shelter.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

export class Shelter extends Object {
    id: number;
    name: string;
    EIN: number;
    address: {
        street: string;
        zip: number;
    }
    phoneNumber: number;
    personType: [{
        id: number,
        name: 'WOMAN' | 'MEN' | 'YOUTH' | 'FAMILY' | 'ALL';
    }]
}

@Component({
    selector: 'shelters',
    templateUrl: 'shelters.component.html',
    styleUrls: ['./shelters.component.css']
})

export class SheltersComponent implements OnInit {
    shelters: Shelter[] = [];
    shelterType: 'MEN' | 'WOMEN' | 'YOUTH' | 'FAMILY' | '' = '';

    constructor(
        private _activated: ActivatedRoute,
        private _shelterService: ShelterService
    ) { }

    ngOnInit() {
        this.getShelters();
    }

    getShelters() {
        this._shelterService.getAllShelters()
            .subscribe((shelters: Shelter[]) => {
                this.shelters = shelters;
                console.log('shelters', this.shelters)
            },
                error => console.error('Error getting shelters', error));
    }
}