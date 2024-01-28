import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminviewprofile',
  templateUrl: './adminviewprofile.component.html',
  styleUrls: ['./adminviewprofile.component.css']
})
export class AdminviewprofileComponent implements OnInit {
  classes: string[] = [
    'LKG',
    'UKG',
    'Ⅰ',
    'ⅠⅠ',
    'ⅠⅠⅠ',
    'Ⅳ',
    'Ⅴ',
    'ⅤⅠ',
    'ⅤⅠⅠ',
    'ⅤⅠⅠⅠ',
    'ⅠⅩ',
    'Ⅹ',
    'ⅩⅠ',
    'ⅩⅠⅠ'
   
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}


