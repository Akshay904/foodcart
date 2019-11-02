import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddstudentComponent,
    ListstudentComponent,
    EmployeeComponent,
    AddemployeeComponent,
    ListemployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
