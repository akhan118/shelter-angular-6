import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sa-shelter-item',
  templateUrl: './shelter-item.component.html',
  styleUrls: ['./shelter-item.component.css']
})
export class ShelterItemComponent implements OnInit {
  @Input() ShelterData 
  ShowInfo: boolean = false;
  constructor() { }
   

  ngOnInit() {
    console.log ('ShelterData', this.ShelterData);
  }
 ShowHide() {
   this.ShowInfo = !this.ShowInfo;
 }
}
