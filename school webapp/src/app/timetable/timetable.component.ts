import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  istimetable = false;
 
  minDate: Date;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 7;
  };

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date;
   }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    stagePadding: 50,
    margin:40,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    responsive:{
      0:{
          items:2
      },
      500:{
          items:2
      },
      1000:{
          items:2
      }
  },
    nav: true
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.istimetable = true;
   }

}


export class AppComponent {
  
      
}
