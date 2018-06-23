import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// This is new in angular 6
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-new-cmp-http',
  templateUrl: './new-cmp-http.component.html',
  styleUrls: ['./new-cmp-http.component.css']
})
export class NewCmpHttpComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users').
    pipe(map(
      (responce: any) => responce.json()
    )).subscribe(
      (data) => {this.displaydata(data); }
    );
  }
displaydata(data) {this.httpdata = data; }
}
