import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-daywise',
  templateUrl: './daywise.component.html',
  styleUrls: ['./daywise.component.css']
})
export class DaywiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'type', 'firstin','lastout','hours','status'];
  dataSource = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}




export interface PeriodicElement1 {
  name: string;
  position: number;
  type: string;
  firstin: string;
  lastout: string;
  hours: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement1[] = [
  {position: 1, name: 'samuel', type: 'NT', firstin: '9.20 AM', lastout:'4.30 PM', hours:'9.04', status:'P  P'},
  {position: 2, name: 'kishore', type: 'NT', firstin: '10.40 AM', lastout:'4.30 PM', hours:'8.40',status: 'P A'},
  {position: 3, name: 'vikram', type: 'NT', firstin: 'NP', lastout:'4.30 PM', hours:'9.04', status:'P  P'},
  {position: 4, name: 'rajesh', type: 'NT', firstin: '10.20 AM', lastout:'4.30 PM', hours:'8.40', status:'P  P'},
  {position: 5, name: 'akash', type: 'NT', firstin: '9.40 AM', lastout:'4.30 PM', hours:'8.40',status: 'P A'},
  {position: 6, name: 'rajesh', type: 'NT', firstin: '9.23 AM', lastout:'4.30 PM', hours:'9.04',status: 'P A'},
  {position: 7, name: 'jackin', type: 'NT', firstin: 'NP', lastout:'4.30 PM', hours:'8.40',status: 'P A'},
  {position: 8, name: 'razik', type: 'NT', firstin: '9.50 AM', lastout:'4.30 PM', hours:'8.40',status: 'P A'},
  {position: 9, name: 'pon vignesh', type: 'NT', firstin: '9.25 AM', lastout:'4.30 PM', hours:'9.04',status: 'P A'},
  {position: 10, name: 'deva', type: 'NT', firstin: 'NP', lastout:'4.30 PM', hours:'8.40',status: 'P A'},
  {position: 11, name: 'ajees', type: 'NT', firstin: 'NP', lastout:'4.30 PM', hours:'8.40',status: 'P A'},
  {position: 12, name: 'lejon', type:'NT', firstin: '10.20 AM', lastout:'4.30 PM', hours:'9.04',status: 'P A'},
  {position: 13, name: 'sakthivel', type: 'NT', firstin: '9.40 AM', lastout:'4.30 PM', hours:'8.40', status:'P  P'},
  {position: 14, name: 'ruben', type: 'NT', firstin: '9.25 AM', lastout:'4.30 PM', hours:'8.40',status: 'P A'},
  {position: 15, name: 'balaji', type: 'NT', firstin: 'NP', lastout:'4.30 PM', hours:'8.40',status: 'P A'},
  {position: 16, name: 'karthi', type: 'NT', firstin: '10.40 AM', lastout:'4.30 PM', hours:'9.04', status:'P  P'},
  {position: 17, name: 'praveen', type: 'NT', firstin: '8.54 AM', lastout:'4.30 PM', hours:'8.40',status: 'P A'},
  {position: 18, name: 'sangili', type: 'NT', firstin: '9.40 AM ', lastout:'4.30 PM', hours:'9.04', status:'P  P'},
  {position: 19, name: 'subha', type:'NT', firstin: '10.30 AM', lastout:'4.30 PM', hours:'8.40', status:'P  P'},
  {position: 20, name: 'sam', type: 'NT', firstin: '10.30 AM', lastout:'4.30 PM', hours:'8.40', status:'P  P'},
];