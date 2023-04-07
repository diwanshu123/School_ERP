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
  createExam(postData: FormData): Observable<any> {
    return this.httpClient.post(environment.apiBaseUrl + '/exam' , postData);
  }
  createExamTerm(postData: FormData): Observable<any> {
    return this.httpClient.post(environment.apiBaseUrl + '/examTerm' , postData);
  }
  createGrades(postData: FormData): Observable<any> {
    return this.httpClient.post(environment.apiBaseUrl + '/grade' , postData);
  }
  createMarksEntry(postData: FormData): Observable<any> {
    return this.httpClient.post(environment.apiBaseUrl + '/marks' , postData);
  }
  marksDistribution(postData: FormData): Observable<any> {
    return this.httpClient.post(environment.apiBaseUrl + '/marksDistribution' , postData);
  }

  updateMarksDistribution(postData: any): Observable<any> {
    return this.httpClient.put(environment.apiBaseUrl +'/marksDistribution', postData).pipe(catchError(this.errorHandler));
  }
  updateExamTerm(postData: any): Observable<any> {
    return this.httpClient.put(environment.apiBaseUrl +'/examTerm', postData).pipe(catchError(this.errorHandler));
  }
  deleteMarksDistribution(id: string): Observable<any> {
    return this.httpClient.delete(environment.apiBaseUrl +'/marksDistribution/' + id).pipe(catchError(this.errorHandler));
  }
  deleteExamTerm(id: string): Observable<any> {
    return this.httpClient.delete(environment.apiBaseUrl +'/examTerm/' + id).pipe(catchError(this.errorHandler));
  }
  deleteGrade(id: string): Observable<any> {
    return this.httpClient.delete(environment.apiBaseUrl +'/grade/' + id).pipe(catchError(this.errorHandler));
  }


  getExamTerms(): Observable<any> {
    return this.httpClient.get(environment.apiBaseUrl +'/examTerm/all' ).pipe(catchError(this.errorHandler));
  }
  getAllExam(): Observable<any> {
    return this.httpClient.get(environment.apiBaseUrl +'/exam/all' ).pipe(catchError(this.errorHandler));
  }
  getAllMarksDistubutions(): Observable<any> {
    return this.httpClient.get(environment.apiBaseUrl +'/marksDistribution/all' ).pipe(catchError(this.errorHandler));
  }
  getAllGrades(): Observable<any> {
    return this.httpClient.get(environment.apiBaseUrl +'/grade/all' ).pipe(catchError(this.errorHandler));
  }
 
  updateExam(examId: string,term: string, postData: any): Observable<any> {
    return this.httpClient.put(environment.apiBaseUrl + '/exam/' + examId,term, postData).pipe(catchError(this.errorHandler));
  }
  // certificate
  getCertificate(): Observable<any> {
    return this.httpClient.get(environment.apiBaseUrl +'/certificate/all' ).pipe(catchError(this.errorHandler));
  }

  createCertificate(postData: FormData): Observable<any> {
    return this.httpClient.post(environment.apiBaseUrl + '/certificate' , postData);
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
    getEmpDesignation(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl + '').pipe(catchError(this.errorHandler));
    }
   
    // emplye
    getDesignaionsEmpl(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl + '/designation/all').pipe(catchError(this.errorHandler));
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

    // Transport Routes
    getAllRoutes(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl + '/route/all').pipe(catchError(this.errorHandler));
    }

    addRoute(postData: any): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl + '/route', postData).pipe(catchError(this.errorHandler));
    }

    updateRoute(routeId: string, postData: any): Observable<any> {
      return this.httpClient.put(environment.apiBaseUrl + '/route/' + routeId, postData).pipe(catchError(this.errorHandler));
    }
    updategrade(gradeId: string, postData: any): Observable<any> {
      return this.httpClient.put(environment.apiBaseUrl + '/grade/' + gradeId, postData).pipe(catchError(this.errorHandler));
    }
    updateFine(fineSetupId: string, postData: any): Observable<any> {
      return this.httpClient.put(environment.apiBaseUrl + '/fineSetup/' + fineSetupId, postData).pipe(catchError(this.errorHandler));
    }

    deleteRoute(id: string): Observable<any> {
      return this.httpClient.delete(environment.apiBaseUrl +'/route/' + id).pipe(catchError(this.errorHandler));
    }

    // Transport Vehicles
    getAllVehicles(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl + '/vehicle/all').pipe(catchError(this.errorHandler));
    }

    addVehicle(postData: any): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl + '/vehicle', postData).pipe(catchError(this.errorHandler));
    }

    updateVehicle(vehicleId: string, postData: any): Observable<any> {
      return this.httpClient.put(environment.apiBaseUrl + '/vehicle/' + vehicleId, postData).pipe(catchError(this.errorHandler));
    }

    deleteVehicle(id: string): Observable<any> {
      return this.httpClient.delete(environment.apiBaseUrl +'/vehicle/' + id).pipe(catchError(this.errorHandler));
    }

    // Transport Stop Pages
    getAllStopPages(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl + '/stoppage/all').pipe(catchError(this.errorHandler));
    }

    addStopPage(postData: any): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl + '/stoppage', postData).pipe(catchError(this.errorHandler));
    }

    updateStopPage(stopId: string, postData: any): Observable<any> {
      return this.httpClient.put(environment.apiBaseUrl + '/stoppage/' + stopId, postData).pipe(catchError(this.errorHandler));
    }

    deleteStopPage(id: string): Observable<any> {
      return this.httpClient.delete(environment.apiBaseUrl +'/stoppage/' + id).pipe(catchError(this.errorHandler));
    }

    // Transport Assign Vehicle
    getAllVehicleAssigns(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl + '/vehicleroute/all').pipe(catchError(this.errorHandler));
    }

    assignVehicle(postData: any): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl + '/vehicleroute', postData).pipe(catchError(this.errorHandler));
    }

    updateAssignVehicle(stopId: string, postData: any): Observable<any> {
      return this.httpClient.put(environment.apiBaseUrl + '/vehicleroute/' + stopId, postData).pipe(catchError(this.errorHandler));
    }

    deleteAssignVehicle(id: string): Observable<any> {
      return this.httpClient.delete(environment.apiBaseUrl +'/vehicleroute/' + id).pipe(catchError(this.errorHandler));
    }
    // employe /employee/designation/:designationId' 

    addEmpDesign(postData: any): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl +'/designation', postData).pipe(catchError(this.errorHandler));
    }
    addEmpployee(postData: any): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl +'/employee', postData).pipe(catchError(this.errorHandler));
    }
    addEmpDepratment(postData: any): Observable<any> {
      return this.httpClient.post(environment.apiBaseUrl +'/department', postData).pipe(catchError(this.errorHandler));
    }
    getempDesignation(): Observable<any> {
      return this.httpClient.get(environment.apiBaseUrl +'' ).pipe(catchError(this.errorHandler));
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
