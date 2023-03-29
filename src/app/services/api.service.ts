import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

// Exam Master
  createExam(name: any, description: any): Observable<any> {
    return this.httpClient.post(environment.apiBaseUrl + '/exam' + name,description);
  }

  getAllExam(): Observable<any> {
    return this.httpClient.get(environment.apiBaseUrl +'/exam/all' ).pipe(catchError(this.errorHandler));
  }

  // certificate
  getCertificate(): Observable<any> {
    return this.httpClient.get(environment.apiBaseUrl +'/certificate/all' ).pipe(catchError(this.errorHandler));
  }

  //Student Accounting
  addFeeType(postData: FormData): Observable<any> {
    return this.httpClient.post(environment.apiBaseUrl +'/feeType', postData).pipe(catchError(this.errorHandler));
  }

  feeTypeList(){
  return this.httpClient.get(environment.apiBaseUrl +'/feeType/all/').pipe(catchError(this.errorHandler));
  }
  feeTypeGroup(){
    return this.httpClient.get(environment.apiBaseUrl +'/feeGroup/all/').pipe(catchError(this.errorHandler));
    }

    addFineSetup(postData: FormData): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl +'/fineSetup', postData ).pipe(catchError(this.errorHandler));
    }
    fineSetupList(){
      return this.httpClient.get(environment.apiBaseUrl +'/fineSetup/all/').pipe(catchError(this.errorHandler));
    }

    getSalaryTemplates(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl +'/salary/all').pipe(catchError(this.errorHandler));
    }

    getSalaryTemplateById(id: string): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl +'/salary/receipt/' + id).pipe(catchError(this.errorHandler));
    }

    addSalary(postData: any): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl +'/salary', postData).pipe(catchError(this.errorHandler));
    }

    updateSalary(postData: any): Observable<any> {
      return this.httpClient.put(environment.apiBaseUrl +'/salary', postData).pipe(catchError(this.errorHandler));
    }

    deleteSalary(id: string): Observable<any> {
      return this.httpClient.delete(environment.apiBaseUrl +'/salary/' + id).pipe(catchError(this.errorHandler));
    }

    getAllEmployees(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl + '/employee/all').pipe(catchError(this.errorHandler));
    }
    fineSetupListById(id: string){
      return this.httpClient.get(environment.apiBaseUrl +'/fineSetup/' + id).pipe(catchError(this.errorHandler));
    }
    feeTypeListByid(id: string){
      return this.httpClient.get(environment.apiBaseUrl +'/feeType/' + id).pipe(catchError(this.errorHandler));
    }
    updateEmpSal(postData: any): Observable<any> {
      const salaryData = {
        salaryGrades: postData
      }

      return this.httpClient.put(environment.apiBaseUrl + '/employee/salaryGrade', salaryData).pipe(catchError(this.errorHandler));
    }
    deleteFineSetup(id: string): Observable<any> {
      return this.httpClient.delete(environment.apiBaseUrl +'/fineSetup/' + id).pipe(catchError(this.errorHandler));
    }
    deleteFeeType(id: string): Observable<any> {
      return this.httpClient.delete(environment.apiBaseUrl +'/feeType/' + id).pipe(catchError(this.errorHandler));
    }
    getLeaveCategory(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl + '/leavesCategory/all').pipe(catchError(this.errorHandler));
    }

    getDesignaions(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl + '/designation/all').pipe(catchError(this.errorHandler));
    }

    addLeave(postData: any): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl +'/leavesCategory', postData).pipe(catchError(this.errorHandler));
    }

    updateLeave(postData: any): Observable<any> {
      return this.httpClient.put(environment.apiBaseUrl +'/leavesCategory', postData).pipe(catchError(this.errorHandler));
    }

    deleteLeave(id: string): Observable<any> {
      return this.httpClient.delete(environment.apiBaseUrl +'/leavesCategory/' + id).pipe(catchError(this.errorHandler));
    }

    getLeaveApplication(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl + '/leavesRequest/all').pipe(catchError(this.errorHandler));
    }

    addLeaveRequest(postData: any): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl + '/leavesRequest', postData).pipe(catchError(this.errorHandler));
    }

    updateLeaveRequestStatus(postData: any): Observable<any> {
      return this.httpClient.put(environment.apiBaseUrl + '/leavesRequest/status', postData).pipe(catchError(this.errorHandler));
    }

    deleteLeaveRequest(id: string): Observable<any> {
      return this.httpClient.delete(environment.apiBaseUrl +'/leavesRequest/' + id).pipe(catchError(this.errorHandler));
    }


  errorHandler(error: {
    error: {
        messge: string;
    };status: any;message: any;
}) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.messge;
    } else {
        errorMessage = `${error.error.messge}`;
    }
    console.log(error)
    return throwError(errorMessage);
}


}
