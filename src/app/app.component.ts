import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular World';
  todayDate;
  constructor(private myservice: MyserviceService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit () {
    this.todayDate = this.myservice.showTodayDate();
  }
}
