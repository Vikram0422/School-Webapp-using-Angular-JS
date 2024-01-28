import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-attendence-entry',
  templateUrl: './attendence-entry.component.html',
  styleUrls: ['./attendence-entry.component.css']
})
export class AttendenceEntryComponent implements OnInit {

  constructor() { }

  public isAttendence =false;

  ngOnInit(): void {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.isAttendence = true;
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

}
