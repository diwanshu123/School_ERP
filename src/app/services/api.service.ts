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
    return this.httpClient.get(environment.apiBaseUrl +'/exam/all' ).pipe(catchError(this.errorHandler));;
  }

  // certificate
  getCertificate(): Observable<any> {
    return this.httpClient.get(environment.apiBaseUrl +'/certificate/all' ).pipe(catchError(this.errorHandler));;
  }

  //feeType
  addFeeType(postData: FormData): Observable<any> {
    return this.httpClient.post(environment.apiBaseUrl +'/feeType', postData ).pipe(catchError(this.errorHandler));;
  }

  feeTypeList(){
  return this.httpClient.get(environment.apiBaseUrl +'/feeType/all/' ).pipe(catchError(this.errorHandler));;
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
