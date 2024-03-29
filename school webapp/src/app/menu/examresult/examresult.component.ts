import { Component, OnInit } from '@angular/core';



export interface Student {
	ID:Number,	
  NAME:String,	
  ENGLISH:Number,
  TAMIL:Number,	
  MATHEMATICS:Number,
  SCIENCE:Number,
  SOCIAL_SCIENCE:Number,
}

const ELEMENT_DATA1: Student[] =[{ID: 4,NAME: "kishore"  ,ENGLISH: 64,TAMIL: 56,MATHEMATICS: 81,SCIENCE: 97,SOCIAL_SCIENCE:70}, 
  {ID: 8,NAME: "Aje",ENGLISH: 72,TAMIL: 65,MATHEMATICS: 46,SCIENCE: 98,SOCIAL_SCIENCE:66},
  {ID: 5,NAME:"Sam",ENGLISH: 71,TAMIL: 65,MATHEMATICS: 75,SCIENCE: 98,SOCIAL_SCIENCE:85},
  {ID: 3,NAME:"Ruben",ENGLISH: 67,TAMIL: 82,MATHEMATICS: 72,SCIENCE: 65,SOCIAL_SCIENCE:86},
  {ID: 7,NAME:"Karthi",ENGLISH: 68,TAMIL: 84,MATHEMATICS: 93,SCIENCE: 84,SOCIAL_SCIENCE:64},
  {ID: 6,NAME:"Razik",ENGLISH: 92,TAMIL: 87,MATHEMATICS: 76,SCIENCE: 63,SOCIAL_SCIENCE:69},
  {ID: 1,NAME:"Vikram",ENGLISH: 74,TAMIL: 82,MATHEMATICS: 79,SCIENCE: 81,SOCIAL_SCIENCE:88},
  {ID: 4,NAME:"Akash",ENGLISH: 86,TAMIL: 95,MATHEMATICS: 63,SCIENCE: 97,SOCIAL_SCIENCE:92},
  {ID: 5,NAME: "jachin",ENGLISH: 66,TAMIL: 75,MATHEMATICS: 83,SCIENCE: 97,SOCIAL_SCIENCE:97},
  {ID: 14,NAME:"rajesh",ENGLISH: 76,TAMIL: 85,MATHEMATICS: 83,SCIENCE: 97,SOCIAL_SCIENCE:79},
  {ID: 4,NAME: "lejon",ENGLISH: 66,TAMIL: 55,MATHEMATICS: 93,SCIENCE: 87,SOCIAL_SCIENCE:87},
  {ID: 6,NAME:"Razik",ENGLISH: 92,TAMIL: 87,MATHEMATICS: 76,SCIENCE: 63,SOCIAL_SCIENCE:69},
  {ID: 1,NAME:"Vikram",ENGLISH: 74,TAMIL: 82,MATHEMATICS: 79,SCIENCE: 81,SOCIAL_SCIENCE:88},
  {ID: 4,NAME:"Akash",ENGLISH: 86,TAMIL: 95,MATHEMATICS: 63,SCIENCE: 97,SOCIAL_SCIENCE:92},
  {ID: 5,NAME: "jachin",ENGLISH: 66,TAMIL: 75,MATHEMATICS: 83,SCIENCE: 97,SOCIAL_SCIENCE:97},
  {ID: 14,NAME:"rajesh",ENGLISH: 76,TAMIL: 85,MATHEMATICS: 83,SCIENCE: 97,SOCIAL_SCIENCE:79},
  {ID: 4,NAME: "lejon",ENGLISH: 66,TAMIL: 55,MATHEMATICS: 93,SCIENCE: 87,SOCIAL_SCIENCE:87},
  ];
@Component({
  selector: 'app-examresult',
  templateUrl: './examresult.component.html',
  styleUrls: ['./examresult.component.css']
})
export class ExamresultComponent implements OnInit {
  displayedColumns11: string[] = [ 'ID', 'NAME', 'ENGLISH','TAMIL','MATHEMATICS','SCIENCE','SOCIAL_SCIENCE'];
  dataSource11 = ELEMENT_DATA1;


  constructor() { }

  ngOnInit(): void {
  }

}
