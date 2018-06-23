import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-cmp-form-model',
  templateUrl: './new-cmp-form-model.component.html',
  styleUrls: ['./new-cmp-form-model.component.css']
})
export class NewCmpFormModelComponent implements OnInit {
  formdata;
  emailid;
  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
     ])),
      passwd: new FormControl('', this.passwordValidation)
   });
  }

  // This is custom password validation
  passwordValidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {'passwd' : true};
    }
 }
  onClickSubmit(data) {
    this.emailid = data.emailid;
  }
}
