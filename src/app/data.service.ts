import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // دریافت لیست واحدها
  getDepartments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/departments`);
  }

  // دریافت لیست کارمندان
  getEmployees(): Observable<any> {
    return this.http.get(`${this.apiUrl}/employees`);
  }

  // افزودن واحد جدید
  addDepartment(department: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/departments`, department);
  }

  // افزودن کارمند جدید
  addEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/employees`, employee);
  }

  // حذف واحد
  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/departments/${id}`);
  }

  // حذف کارمند
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/employees/${id}`);
  }
}
