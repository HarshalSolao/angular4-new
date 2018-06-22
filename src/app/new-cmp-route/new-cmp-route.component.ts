import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-new-cmp-route',
  templateUrl: './new-cmp-route.component.html',
  styleUrls: ['./new-cmp-route.component.css']
})
export class NewCmpRouteComponent implements OnInit {

  todayDate;
  message = 'This is example of Routing with new component loaded';
  constructor(private service: MyserviceService) { }

  ngOnInit() {
    this.todayDate = this.service.showTodayDate();
  }

}
