import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sa-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.css']
})
export class LoadingIconComponent implements OnInit {
  @Input() iconColor: string;

  constructor() { }

  ngOnInit() {
    console.log('color', this.iconColor)
  }

}
