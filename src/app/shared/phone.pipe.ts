import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})

export class FormatPhonePipe implements PipeTransform {
  transform(phoneNumber: string): string {
    let formattedPhoneNumber: string;
    let phoneNumberCopy: string;
    if (!phoneNumber) {
      return phoneNumber;
    };
    if (phoneNumber && typeof (phoneNumber) === 'number') {
      phoneNumberCopy = phoneNumber + '';
    };

    if (phoneNumberCopy.length === 7) {
      const tel1 = phoneNumberCopy.substring(0, 2);
      const tel2 = phoneNumberCopy.substring(3);
      return formattedPhoneNumber = `${tel1}-${tel2}`;
    } else if (phoneNumberCopy.length === 10) {
      const tel1 = phoneNumberCopy.substring(0, 3);
      const tel2 = phoneNumberCopy.substring(3, 6);
      const tel3 = phoneNumberCopy.substring(6, 10);
      return formattedPhoneNumber = `${tel1}-${tel2}-${tel3}`;
    } else if (phoneNumberCopy.length === 11) {
      const tel1 = phoneNumberCopy.substring(0, 1);
      const tel2 = phoneNumberCopy.substring(1, 4);
      const tel3 = phoneNumberCopy.substring(4, 7);
      const tel4 = phoneNumberCopy.substring(7, 11);
      return formattedPhoneNumber = `${tel1}-${tel2}-${tel3}-${tel4}`;
    } else {
      return phoneNumber;
    }
  }
}