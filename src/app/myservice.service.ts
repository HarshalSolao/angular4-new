import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  showTodayDate() {
    // tslint:disable-next-line:prefer-const
    let ndate = new Date();
    return ndate;
  }
}
