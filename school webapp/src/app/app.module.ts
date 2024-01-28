import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ForgotpasswordComponent } from './authentication/forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';;
import { MenuModule } from './menu/menu.module'
import { LoginComponent } from './authentication/login/login.component';
import { AdminReportStudentComponent } from './menu/admin-report-student/admin-report-student.component';
import { OtpComponent } from './authentication/otp/otp.component';
import { ResetpasswordComponent } from './authentication/resetpassword/resetpassword.component';











const routes:Routes = [
  {path:'',component:LoginComponent },
  
  { 
    path: 'login', 
    component: LoginComponent
   },

  { 
    path: 'forgotpassword', 
    component: ForgotpasswordComponent
   },

   { 
    path: 'otp', 
    component: OtpComponent
   },

   { 
    path: 'resetpassword', 
    component: ResetpasswordComponent
   },

  
 ]


 @NgModule({
  declarations: [
    AppComponent,
    ForgotpasswordComponent,
    OtpComponent,
    ResetpasswordComponent,
    ProfileComponent,
    LoginComponent,
    AdminReportStudentComponent,
    
 
    
   

   
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    HttpClientModule,
    MatCheckboxModule,
    MenuModule,
    MatCardModule,
    MatButtonModule,
    CarouselModule ,
    MatExpansionModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
