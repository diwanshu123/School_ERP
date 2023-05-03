import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stu-info-document',
  templateUrl: './stu-info-document.component.html',
  styleUrls: ['./stu-info-document.component.scss']
})
export class StuInfoDocumentComponent {
  @Input() studentData: any ;
  document:any;
  guardianDocu:any;
  guardianImg:any;
  idcard:any;
  constructor() {
  }
 ngOnInit() {
  this.guardianDocu = this.studentData['guardian']['idProofDocument'];
  this.guardianImg = this.studentData['guardian']['image'];
  this.idcard= this.studentData['idCardDocument'];
 }
}

