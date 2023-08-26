import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { catchError,Observable, throwError } from 'rxjs';

@Injectable()
export class EmployeeService {

  private _url:string="/assets/data/employee.json"

  constructor(private http:HttpClient){

  }
  getEmployees() : Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
      return throwError(error.message || "Server Error");
  }

}
