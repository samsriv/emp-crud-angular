import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/emp";

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(this.baseUrl +"/get/"+id);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(this.baseUrl +"/save", employee);
  }

  updateEmployee(id: number, value: any): Observable<Object>{
    return this.http.put(this.baseUrl+"/update/"+id, value);
  }

  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+"/delete/"+id, { responseType: 'text' });
  }

  getEmployeeList(): Observable<any>{
    return this.http.get(this.baseUrl+"/getall");
  }


}
