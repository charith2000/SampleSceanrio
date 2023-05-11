import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  username: string = "";
  nic: string = "";
  email = new FormControl('', [Validators.required, Validators.email]);
  dob: string = "";
  contactNumber: number = 0;
  newPassword: string = "";
  confirmedPassword: string = "";
}
