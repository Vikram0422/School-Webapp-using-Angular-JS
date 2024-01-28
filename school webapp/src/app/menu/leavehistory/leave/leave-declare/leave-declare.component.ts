import { Component, OnInit } from '@angular/core';

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

}
