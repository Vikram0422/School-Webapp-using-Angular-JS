import { Component, OnInit } from '@angular/core';
import { BaseCdkCell } from '@angular/cdk/table';



export interface Student {
  Class: String,	
  BC:Number,	
  BCM:Number,	
  DCN:Number,
  MBC:Number,	
  OC:Number,
  SC:Number,
}
const ELEMENT_DATA1: Student[] =[{Class: "LKG",BC: 4,BCM: 2,DCN: 4,MBC: 6,OC: 1,SC: 7,}, 
 {Class: "UKG",BC: 8,BCM: 4,DCN: 12,MBC: 5,OC: 6,SC: 8,},
 {Class: "I",BC: 5,BCM: 9,DCN: 10,MBC: 25,OC: 5,SC: 8,},
 {Class: "II",BC: 3,BCM: 12,DCN: 3,MBC: 12,OC: 2,SC: 5,},
 {Class: "III",BC: 7,BCM: 5,DCN: 6,MBC: 4,OC: 3,SC: 14,},
 {Class: "1V",BC: 6,BCM: 13,DCN: 12,MBC: 7,OC: 6,SC: 3,},
 {Class: "V",BC: 1,BCM: 6,DCN: 4,MBC: 12,OC: 9,SC: 1,},
 {Class: "VI",BC: 4,BCM: 8,DCN: 6,MBC: 5,OC: 3,SC: 7,},
 {Class: "VII",BC: 5,BCM: 18,DCN: 6,MBC: 15,OC: 13,SC: 7,},
 {Class: "VIII",BC: 14,BCM: 8,DCN: 16,MBC: 5,OC: 13,SC: 7,},
 {Class: "IX",BC: 4,BCM: 18,DCN: 6,MBC: 15,OC: 13,SC: 7,},
 {Class: "X",BC: 4,BCM: 18,DCN: 6,MBC: 15,OC: 3,SC: 17,},
 {Class: "XI",BC: 14,BCM: 18,DCN: 6,MBC: 5,OC: 13,SC: 7,},
 {Class: "XII",BC: 4,BCM: 18,DCN: 6,MBC: 15,OC: 3,SC: 17,},
];

export interface Gender {
  Class: String,	
  Male:Number,	
  Female:Number,	
}

const ELEMENT_DATA2: Gender[] =[{Class: "LKG",Male: 4,Female: 2,}, 
 {Class: "UKG",Male: 8,Female: 4,},
 {Class: "I",Male: 5,Female: 9,},
 {Class: "II",Male: 3,Female: 12,},
 {Class: "III",Male: 7,Female: 5,},
 {Class: "1V",Male: 6,Female: 13,},
 {Class: "V",Male: 1,Female: 6,},
 {Class: "VI",Male: 4,Female: 8,},
 {Class: "VII",Male: 5,Female: 18,},
 {Class: "VIII",Male: 14,Female: 8,},
 {Class: "IX",Male: 4,Female: 18,},
 {Class: "X",Male: 4,Female: 18,},
 {Class: "XI",Male: 14,Female: 18,},
 {Class: "XII",Male: 4,Female: 18,},
];

export interface District {
  SNO: number,	
  District:String,	
  Count:Number,	
}

const ELEMENT_DATA3: District[] =[{SNO: 1,District: "Tirunelveli",Count: 222,},
{SNO: 2,District: "Coimbatore",Count: 26,},
{SNO: 3,District: "KanyaKumari",Count: 44,},
{SNO: 4,District: "Tenkasi",Count:56,},
{SNO: 5,District: "Tuticorin",Count:73,},
{SNO: 6,District: "Thoothukudi",Count:52,},
{SNO: 7,District: "Chennai",Count: 124,},
{SNO: 8,District: "Salem",Count: 78,},
{SNO: 9,District: "Ernakulam",Count: 40,},
{SNO: 10,District: "Virudhunagar",Count: 58,},
];


@Component({
  selector: 'app-admission-report',
  templateUrl: './admission-report.component.html',
  styleUrls: ['./admission-report.component.css']
})
export class AdmissionReportComponent implements OnInit {
  displayedColumns1: string[] = ['Class', 'BC', 'BCM', 'DCN', 'MBC', 'OC', 'SC'];
  dataSource1 = ELEMENT_DATA1;

  displayedColumns2: string[] = ['Class', 'Male', 'Female'];
  dataSource2 = ELEMENT_DATA2;

  displayedColumns3: string[] = ['SNO', 'District', 'Count'];
  dataSource3 = ELEMENT_DATA3;
  constructor() { }

  ngOnInit(): void {
  }

}
