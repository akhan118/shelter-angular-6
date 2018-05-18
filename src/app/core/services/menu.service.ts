import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  openMenu: boolean = false;
  private menuValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.openMenu);
  public menuValue$: Observable<boolean> = this.menuValue.asObservable();

  constructor() { }

  toggleMenu() {
    this.openMenu = !this.openMenu;
    this.menuValue.next(this.openMenu);
  }
}
