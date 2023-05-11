import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {RouterLink} from "@angular/router";

export interface customer{
  cusId : string;
  cusName : string;
  cusNIC : string;
  cusDOB : string;
  cusEmail: string;
  cusContactNumber : string;

}
const ELEMENT_DATA: customer[] = [
  {cusId: '001', cusName : 'charith', cusNIC: '200001403095',cusDOB : "10-01-2000", cusEmail: 'abc@gmai.com', cusContactNumber: "0761234567" },
  {cusId: '002', cusName : 'lakmal', cusNIC: '20011403089',cusDOB : "10-01-2001", cusEmail: 'def@gmai.com', cusContactNumber: "0761134867" },

];
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  displayedColumns: string[] = ['cusId', 'cusName', 'cusNIC', 'cusDOB', 'cusEmail','cusContactNumber', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord() {

  }
}
