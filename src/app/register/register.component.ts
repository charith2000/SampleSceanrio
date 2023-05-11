import {Component, ElementRef, Inject, Optional} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {FocusMonitor} from "@angular/cdk/a11y";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username : string ="";
  nic : string = "";
  email = new FormControl('', [Validators.required, Validators.email]);
  dob : string = "";
  contactNumber : number = 0 ;
  newPassword : string ="";
  confirmedPassword : string ="";

  show: boolean= false;
  submit(){
    console.log("user name is " + this.username)
    this.clear();
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  clear(){
    this.username ="";
    this.nic ="";
    this.dob;
    this.contactNumber;
    this.newPassword = "";
    this.confirmedPassword ="'";
    this.show = true;
  }
}
