import { Component, Input } from '@angular/core';

@Component({
  selector: 'sa-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.css']
})
export class LoadingIconComponent {
  @Input() iconColor: string;

  constructor() { }

}
