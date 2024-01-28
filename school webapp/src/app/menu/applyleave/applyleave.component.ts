import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})


export class ApplyleaveComponent implements OnInit {
  minDate: Date;
  
  classes: string[] = [
    'Casual Leave',
    'On Duty',
    'Medical Leave'
  ];

  isDate = true;
  hasDate = false

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date;
   }

  ngOnInit(): void {
  }

  ishalfDay(event:any) {
    if(event.checked){
      this.hasDate = true;
      this.isDate = false;
    }
    else{
      this.hasDate = false;
      this.isDate = true;
    }
  }

}
