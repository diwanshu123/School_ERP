import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { StudentStrengthReportComponent } from './student-strength-report/student-strength-report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdmissionDetailsReportsComponent } from './admission-details-reports/admission-details-reports.component';
import { InactiveStudentReportComponent } from './inactive-student-report/inactive-student-report.component';
import { FeesConsessionReportComponent } from './fees-consession-report/fees-consession-report.component';
import { ClassTeacherListComponent } from './class-teacher-list/class-teacher-list.component';
import { SubjectTeacherListComponent } from './subject-teacher-list/subject-teacher-list.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { EmployeeAttendenceComponent } from './employee-attendence/employee-attendence.component';


@NgModule({
  declarations: [
    StudentStrengthReportComponent,
    AdmissionDetailsReportsComponent,
    InactiveStudentReportComponent,
    FeesConsessionReportComponent,
    ClassTeacherListComponent,
    SubjectTeacherListComponent,
    StudentAttendanceComponent,
    EmployeeAttendenceComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
