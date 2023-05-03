import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stud-info-picture',
  templateUrl: './stud-info-picture.component.html',
  styleUrls: ['./stud-info-picture.component.scss']
})
export class StudInfoPictureComponent {
  @Input() studentData: any ;
  student:any;
  constructor() {
  }
 ngOnInit() {
  this.student = this.studentData;
 }
}
