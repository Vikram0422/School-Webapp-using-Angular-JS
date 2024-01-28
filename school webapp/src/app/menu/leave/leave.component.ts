import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';



@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
}) 

 



export class LeaveComponent implements OnInit {

  

  
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['SNo', 'Date', 'Type', 'Reason', 'Applied', 'Status'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null | undefined;
  istable = true;
  istabs = false;
  isdeclare = true;
  isoverview = true;
  isApply = true;
  isApply1 = false;
  panelOpenState = false;
  isdate = false;

  minDate: Date;
  displayedColumns!: Iterable<string>;


  
  

  myTabsSelectedTabChange(changeEvent: MatTabChangeEvent): void {
    if (changeEvent.tab.textLabel === 'Approval/Rejection') {
      this.istabs = true;
      
    }

    if (changeEvent.tab.textLabel === 'Leave Declaration'){
      this.istabs = false;
    }

    if (changeEvent.tab.textLabel === 'Overview'){
      this.istabs = false;
    }
    
  }

  classes: string[] = [
    'Casual Leave',
    'On Duty',
    'Medical Leave'
  ];

  isDate = true;
  hasDate = false;

  constructor() {
    this.minDate = new Date;
    
  }

  ngOnInit(): void {
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

}
export interface PeriodicElement {
  
  Type: string;
  SNo: number;
  Reason: string;
  Date: string;
  Applied: string;
  Status: string;
  description: string;
  image: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    SNo: 1,
    Type: 'Casual Leave',
    Reason: 'Persional Work',
    Date: '12-09-2022',
    Applied: '10-10-2022',
    Status: 'Pending',
    description: `hhehehehe`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  },
  {
    SNo: 2,
    Type: 'Casual Leave',
    Reason: 'Persional Work',
    Date: '12-10-2022',
    Applied: '10-10-2022',
    Status: 'Pending',
    description: `fever`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  },
  {
    SNo: 3,
    Type: 'Casual Leave',
    Reason: 'Persional Work',
    Date: '12-10-2022',
    Applied: '10-10-2022',
    Status: 'Pending',
    description: `fever`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  },
  {
    SNo: 4,
    Type: 'Casual Leave',
    Reason: 'Persional Work',
    Date: '12-10-2022',
    Applied: '10-10-2022',
    Status: 'Pending',
    description: `fever`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  },
  {
    SNo: 5,
    Type: 'Permission',
    Reason: 'Exmination',
    Date: '12-10-2022',
    Applied: '10-10-2022',
    Status: 'Pending',
    description: ``,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  },
  {
    SNo: 6,
    Type: 'Permission',
    Reason: 'Exmination',
    Date: '12-10-2022',
    Applied: '10-10-2022',
    Status: 'Approved',
    description: ``,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  },
  {
    SNo: 7,
    Type: 'Permission',
    Reason: 'Exmination',
    Date: '12-10-2022',
    Applied: '10-10-2022',
    Status: 'Approved',
    description: ``,
    image: "https://play-lh.googleusercontent.com/NKQOm4mE5NscFdbtCrNbtNUqTqef13amukVSRDhSWGvRxvFXb7QDqYX15VACh-e68Rx-",
  },
  {
    SNo: 8,
    Type: 'Permission',
    Reason: 'Exmination',
    Date: '12-10-2022',
    Applied: '10-10-2022',
    Status: 'Approved',
    description: ``,
    image: "https://play-lh.googleusercontent.com/NKQOm4mE5NscFdbtCrNbtNUqTqef13amukVSRDhSWGvRxvFXb7QDqYX15VACh-e68Rx-",
  },
  {
    SNo: 9,
    Type: 'Casual Leave',
    Reason: 'Persional Work',
    Date: '12-10-2022',
    Applied: '10-10-2022',
    Status: 'Pending',
    description: ``,
    image: "https://play-lh.googleusercontent.com/NKQOm4mE5NscFdbtCrNbtNUqTqef13amukVSRDhSWGvRxvFXb7QDqYX15VACh-e68Rx-",
  },
  {
    SNo: 10,
    Type: 'Permission',
    Reason: 'Exmination',
    Date: '12-10-2022',
    Applied: '10-10-2022',
    Status: 'Approved',
    description: ``,
    image: "https://play-lh.googleusercontent.com/NKQOm4mE5NscFdbtCrNbtNUqTqef13amukVSRDhSWGvRxvFXb7QDqYX15VACh-e68Rx-",
  },
];

