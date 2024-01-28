import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthwise',
  templateUrl: './monthwise.component.html',
  styleUrls: ['./monthwise.component.css']
})
export class MonthwiseComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'class', 'type','days'];
  dataSource = ELEMENT_DATA;

  minDate: Date;

  constructor() {
    this.minDate = new Date; 
  }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  class: string;
  type: string;
  days:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'sam', class:'X', type: 'T',days:10},
  {position: 2, name: 'kishore', class: 'IV', type: 'T',days:10},
  {position: 3, name: 'vikram', class: 'Nil', type: 'NT',days:10},
  {position: 4, name: 'rajesh', class: 'VII', type: 'T',days:10},
  {position: 5, name: 'akash', class: 'X', type: 'T',days:10},
  {position: 6, name: 'jackin', class: 'IV', type: 'T',days:10},
  {position: 7, name: 'ajees', class: 'Nil', type: 'NT',days:10},
  {position: 8, name: 'praveen', class: 'XI', type: 'T',days:10},
  {position: 9, name: 'sangili', class: 'Nil', type: 'NT',days:10},
  {position: 10, name: 'razik', class: 'II', type: 'NT',days:10},
];