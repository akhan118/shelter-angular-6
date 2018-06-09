import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShelterTypeService {
  private value: BehaviorSubject<string> = new BehaviorSubject<string>('All');
  public value$: Observable<string> = this.value.asObservable();
  constructor() { }

  public setShelterType(shelterType: string) {
    this.value.next(shelterType);
  }
}
