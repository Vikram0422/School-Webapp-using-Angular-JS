import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  minDate: Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date;
  }

  ngOnInit(): void {
  }
  isAttendence = false;
  selectedValue = '';
  isHourSelected = false;

  Pselect = false;
  Aselect = false;
  Oselect = false;

Pchange(){

  this.Pselect = !this.Pselect;
  this.Aselect = false;
  this.Oselect = false;

  // this.Pcolor = this.Pselect?'green':'white';
  // this.Acolor ='white';
  // this.Ocolor = 'white';
  
}

Achange(){
 
  this.Pselect = false;
  this.Oselect = false;
  this.Aselect = !this.Aselect;

  // this.Acolor = this.Aselect?'red':'white';
  // this.Pcolor = 'white';
  // this.Ocolor = 'white';
}

Ochange(){
  
  this.Pselect = false;
  this.Aselect = false;
  this.Oselect = !this.Oselect;

  // this.Ocolor = this.Oselect?'blue':'white';
  // this.Pcolor = 'white';
  // this.Acolor = 'white';
}

  foods:any = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
  ];


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
   this.isHourSelected = true;
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 7;
  };

  hourSelect(val:any){
    console.log("selected");
    this.isAttendence = true;
  }
}
