import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthwise',
  templateUrl: './monthwise.component.html',
  styleUrls: ['./monthwise.component.css']
})
export class MonthwiseComponent implements OnInit {

  minDate: Date;

  constructor() {
    this.minDate = new Date; 
  }

  ngOnInit(): void {
  }

}
