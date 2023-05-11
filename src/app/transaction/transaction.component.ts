import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";


export interface customer{
  transID: string;
  accountNumber: number;
  transactionType: string;
  detail: string;
  amount: number;



}
const ELEMENT_DATA: customer[] = [
  {transID: '001', accountNumber : 11233445566908, transactionType: 'credit', detail : "description", amount: 10000},
];
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  orderNo: string = "";
  date: string = "";
  select: string = "";
  estimateTime: string = "";

  displayedColumns: string[] = ['transID', 'accountNumber', 'transactionType', 'detail', 'amount'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord() {


  }
}
