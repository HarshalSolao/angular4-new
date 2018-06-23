import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp-form',
  templateUrl: './new-cmp-form.component.html',
  styleUrls: ['./new-cmp-form.component.css']
})
export class NewCmpFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClickSubmit(data) {
    alert('Entered Email id : ' + data.emailid);
 }
}
