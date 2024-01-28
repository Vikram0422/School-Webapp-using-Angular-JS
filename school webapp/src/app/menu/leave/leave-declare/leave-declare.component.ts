
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicElement } from '../leave.component';
@Component({
  selector: 'app-leave-declare',
  templateUrl: './leave-declare.component.html',
  styleUrls: ['./leave-declare.component.css']
})
export class LeaveDeclareComponent implements OnInit {

  
  isApply1 = false;
  isdate = false;
  isDate = true;
  hasDate = false;
  isApply = true;
  istable = true;

  minDate: Date;

  isappl(_event: any) {
    this.isdate = true;
    this.isApply = false;
    this.isApply1 = true;
    this.istable = false;
  }

  isappl1(_event: any) {
    this.isdate = false;
    this.isApply = true;
    this.isApply1 = false;
    this.istable = true;
  }

  ishalfDay(event: any) {
    if (event.checked) {
      this.hasDate = true;
      this.isDate = false;

    }
    else {
      this.hasDate = false;
      this.isDate = true;
    }
  }

  classes: string[] = [
    'Casual Leave',
    'On Duty',
    'Medical Leave'
  ]

  constructor() {
    this.minDate = new Date;
   }

  ngOnInit(): void {
  }


  displayedColumns: string[] = ['position', 'date','name', 'To', 'Reason'];
  dataSource = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement1 {
  name: string;
  from: string;
  position: number;
  to: string;
  reason: string;
}

const ELEMENT_DATA: PeriodicElement1[] = [
  {position: 1, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'diwalli'},
  {position: 2, name: 'S', from: '12-09-2022',to:  '12:00:00 AM' , reason: 'chrishtmas'},
  {position: 3, name: 'T', from: '12-09-2022',to:'12:00:00 AM' , reason: 'new year'},
  {position: 4, name: 'S', from: '12-09-2022',to: '12:00:00 AM' , reason: 'pongal'},
  {position: 5, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'cd'},
  {position: 6, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'C'},
  {position: 7, name: 'S', from: '12-09-2022',to: '12:00:00 AM' , reason: 'N'},
  {position: 8, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'O'},
  {position: 9, name: 'S',from: '12-09-2022', to: '12:00:00 AM' , reason: 'F'},
  {position: 10, name: 'S',from: '12-09-2022', to: '12:00:00 AM' , reason: 'Ne'},
  {position: 11, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'diwalli'},
  {position: 12, name: 'S', from: '12-09-2022',to:  '12:00:00 AM' , reason: 'chrishtmas'},
  {position: 13, name: 'T', from: '12-09-2022',to:'12:00:00 AM' , reason: 'new year'},
  {position: 14, name: 'S', from: '12-09-2022',to: '12:00:00 AM' , reason: 'pongal'},
  {position: 15, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'cd'},
  {position: 16, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'C'},
  {position: 17, name: 'S', from: '12-09-2022',to: '12:00:00 AM' , reason: 'N'},
  {position: 18, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'O'},
  {position: 19, name: 'S',from: '12-09-2022', to: '12:00:00 AM' , reason: 'F'},
  {position: 20, name: 'S',from: '12-09-2022', to: '12:00:00 AM' , reason: 'Ne'},
  {position: 21, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'diwalli'},
  {position: 22, name: 'S', from: '12-09-2022',to:  '12:00:00 AM' , reason: 'chrishtmas'},
  {position: 23, name: 'T', from: '12-09-2022',to:'12:00:00 AM' , reason: 'new year'},
  {position: 24, name: 'S', from: '12-09-2022',to: '12:00:00 AM' , reason: 'pongal'},
  {position: 25, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'cd'},
  {position: 26, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'C'},
  {position: 27, name: 'S', from: '12-09-2022',to: '12:00:00 AM' , reason: 'N'},
  {position: 28, name: 'T',from: '12-09-2022', to: '12:00:00 AM' , reason: 'O'},
  {position: 29, name: 'S',from: '12-09-2022', to: '12:00:00 AM' , reason: 'F'},
  {position: 30, name: 'S',from: '12-09-2022', to: '12:00:00 AM' , reason: 'Ne'},
  
];