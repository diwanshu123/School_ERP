import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stu-parent-info',
  templateUrl: './stu-parent-info.component.html',
  styleUrls: ['./stu-parent-info.component.scss']
})
export class StuParentInfoComponent {
  @Input() studentData: any ;
  parent:any;
  constructor() {
  }
 ngOnInit() {
  this.parent = this.studentData['guardian'];
 }
}

