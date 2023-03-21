import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl= 'http://localhost:8080/api/v1'
  
  constructor(private httpClient: HttpClient) { }
  
// Exam Master
  createExam(name: any, description: any): Observable<any> {
    return this.httpClient.post(this.apiBaseUrl + '/exam' + name,description);
  }

  getAllExam(): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl +'/exam/all' ).pipe(catchError(this.errorHandler));;
  }




  // certificate 
  getCertificate(): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl +'/certificate/all' ).pipe(catchError(this.errorHandler));;
  }

  //feeType
  addFeeType(postData: FormData): Observable<any> {
    return this.httpClient.post(this.apiBaseUrl +'/feeType', postData ).pipe(catchError(this.errorHandler));;
  }
   feeTypeList(){
    return this.httpClient.get(this.apiBaseUrl +'/feeType/all/' ).pipe(catchError(this.errorHandler));;

   }


  errorHandler(error: {
    error: {
        message: string;
    };status: any;message: any;
}) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
    } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
}


}
