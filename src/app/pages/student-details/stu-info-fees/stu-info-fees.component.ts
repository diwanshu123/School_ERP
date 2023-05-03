import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stu-info-fees',
  templateUrl: './stu-info-fees.component.html',
  styleUrls: ['./stu-info-fees.component.scss']
})
export class StuInfoFeesComponent {
  @Input() studentData: any ;
  studentFee:any;
  constructor() {
  }
 ngOnInit() {
  this.studentFee = this.studentData['fees'];
 }
}
