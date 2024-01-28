import { Component, OnInit } from '@angular/core';
import { DashboardLayoutConfiguration } from '../models/dashboard-layout-configuration.model';
import { NavigationLink } from '../models/navigation-link.model';
import { SidePanelPosition } from '../models/side-panel-position.enum';
import { SidePanelState } from '../models/side-panel-state.enum';
import { slideInAnimation } from './menu.animation';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [slideInAnimation]
})
export class MenuComponent {

  public configuration: DashboardLayoutConfiguration;
  public links!: NavigationLink[];
  
  constructor() {
    this.configuration = new DashboardLayoutConfiguration(
      SidePanelPosition.LEFT, 
      SidePanelState.OPEN
    );
    this.createLinks();
  }

  private createLinks() {
    this.links = [
      new NavigationLink("Dashboard", ['firstpage'], "fa-solid fa-house-user"),
      new NavigationLink("Timetable", ['timetable'], "fa-solid fa-calendar-day"),
      new NavigationLink("Exam Results", ['examresult'], "fa-solid fa-user-graduate"),
      new NavigationLink("Feedback", ['feedback'],"fa-solid fa-school-circle-exclamation"),
      new NavigationLink("Admin View Profile", ['adminviewprofile'], "fa-solid fa-user-tie"),
      new NavigationLink("Attendance", ['attendence'], "fa-solid fa-calendar-day"),
      new NavigationLink("Admission", ['admission'], "fa-solid fa-school-circle-exclamation"),
      new NavigationLink("Leave & OD", ['leave'], "fa-solid fa-calendar-day"),
      new NavigationLink("About Us", ['aboutus'], "fa-solid fa-circle-info"),
    ]
  }

}
