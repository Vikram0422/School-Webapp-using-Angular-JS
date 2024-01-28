import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstpageComponent } from '../firstpage/firstpage.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from '../admission/admission.component';
import { EnquiryFormComponent } from '../enquiry-form/enquiry-form.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { SingleDoubleClickDirective } from './single-double-click.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfileComponent } from '../profile/profile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AttendenceComponent } from '../attendence/attendence.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { AdmissionReportComponent } from '../admission-report/admission-report.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TimetableComponent } from '../timetable/timetable.component';
import { ExamresultComponent } from './examresult/examresult.component';
import { AdminviewprofileComponent } from './adminviewprofile/adminviewprofile.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminReportStudentComponent } from './admin-report-student/admin-report-student.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminFeedbackHistoryComponent } from './admin-feedback-history/admin-feedback-history.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OverallComponent } from './overall/overall.component';
import { LeaveComponent } from './leave/leave.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { PendinglistComponent } from './pendinglist/pendinglist.component';
import { ReviewLeaveRequestComponent } from './review-leave-request/review-leave-request.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MonthwiseComponent } from './leave/monthwise/monthwise.component';
import { LeaveDeclareComponent } from './leave/leave-declare/leave-declare.component';
import { DaywiseComponent } from './leave/daywise/daywise.component';
import { ApprovalRejectionComponent } from './leave/approval-rejection/approval-rejection.component';
import { MatRadioModule } from '@angular/material/radio';




const routes: Routes = [
  {
    path: 'home',
    component: MenuComponent,
    children: [
      { 
        path: 'firstpage', 
        component: FirstpageComponent
       },
       { 
        path: 'examresult', 
        component: ExamresultComponent
       },
       { 
        path: 'overall', 
        component: OverallComponent
       },
       { 
        path: 'leave', 
        component: LeaveComponent
       },
       { 
        path: 'applyleave', 
        component: ApplyleaveComponent
       },
       { 
        path: 'leavehistory', 
        component: LeavehistoryComponent
       },
       { 
        path: 'pendinglist', 
        component: PendinglistComponent
       },
       { 
        path: 'review-leave-request', 
        component: ReviewLeaveRequestComponent
       },
       { 
        path: 'timetable', 
        component: TimetableComponent
       },
        { 
          path: 'attendence', 
          component: AttendenceComponent
         },
    
      { 
        path: 'admission', 
        component: AdmissionComponent, 
      },
      {
        path:"enquiryform",
        component:EnquiryFormComponent,
        data: { animation: 'togglePage' }
      },
      {
        path:"admissionreport",
        component:AdmissionReportComponent
      },
    
    {
      path:"admin-report",
      component:AdminReportComponent
    },
    {
      path:"admin-report-student",
      component:AdminReportStudentComponent
    },
      { 
        path: 'adminviewprofile', 
        component: AdminviewprofileComponent
       },
      {
      path : 'profile', 
      component:ProfileComponent
    },
    {
      path : 'aboutus', 
      component:AboutusComponent
    },
    {
      path : 'feedback', 
      component:FeedbackComponent
    },
    {
      path : 'admin-feedback', 
      component:AdminFeedbackComponent
    },
    {
      path : 'admin-feedback-history', 
      component:AdminFeedbackHistoryComponent
    },


    ]
  },
];

@NgModule({
  declarations: [
    MenuComponent,
    DashboardComponent,
    SideNavComponent,
    HeaderComponent,
    AttendenceComponent,
    AdmissionComponent,
    EnquiryFormComponent,
    AdmissionReportComponent,
    SingleDoubleClickDirective,
    AboutusComponent,
    FirstpageComponent,
    FeedbackComponent,
    ExamresultComponent,
    AdminviewprofileComponent,
    AdminReportComponent,
    TimetableComponent,
    AdminFeedbackComponent,
    AdminFeedbackHistoryComponent,
    ApplyleaveComponent,
    FeedbackComponent,
    LeavehistoryComponent,
    PendinglistComponent,
    OverallComponent,
    LeaveComponent,
    ReviewLeaveRequestComponent,
    MonthwiseComponent,
    LeaveDeclareComponent,
    DaywiseComponent,
    ApprovalRejectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatMenuModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,    
    MatButtonToggleModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatRippleModule,
    MatOptionModule,
    CarouselModule,
    MatExpansionModule,
    MatRadioModule
  ],
  exports:[
    SingleDoubleClickDirective
  ]
})
export class MenuModule { }
