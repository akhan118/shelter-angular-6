
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { ShelterService } from '@appCore/services/shelter.service';
import { ShelterType } from 'app/models/ShelterType';

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
    filterValue: string = '';
    isLoading: boolean = false;
    typeKey: string = '';
    shelters: Shelter[] = [];

    constructor(
        private _activated: ActivatedRoute,
        private _shelterService: ShelterService
    ) { }

    ngOnInit() {
        this.getShelterType();
    }

    /**
     * Parses the current url to get the shelterType value
     * from the filter parameter
     */
    getShelterType() {
        this._activated.queryParams.subscribe((params) => {

            // Passes the filter parameter into typeKey variable
            this.typeKey = params['filter'];

            /**
             * Checks if the typeKey variable is valid if it's
             * not we run the getShelters method without an arguement
             * passed in
             */
            if (!this.typeKey) {
                this.getShelters();
                return;
            };
            const typeValue: number = ShelterType[this.typeKey.toLocaleUpperCase()];
            this.getShelters(typeValue);
        });
    }

    getShelters(shelterType: number = 5) {
        this.isLoading = true;
        this._shelterService.getShelters(shelterType)
            .subscribe((shelters: Shelter[]) => {
                this.isLoading = false;
                this.shelters = shelters
            }, (error) => {
                this.isLoading = false;
                console.error('Error getting shelters', error)
            });
    }
}