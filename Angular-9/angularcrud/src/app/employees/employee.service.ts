import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  // private listEmployees: Employee[] = [
  //   {
  //     id: 1,
  //     name: 'John',
  //     gender: 'Male',
  //     contactPreference: 'Email',
  //     email: 'Gk5Hn@example.com',
  //     dateOfBirth: new Date('10/25/1988'),
  //     department: '3',
  //     isActive: true,
  //     photoPath: 'assets/images/john.png',
  //     password: 'test',
  //   },
  //   {
  //     id: 2,
  //     name: 'Mary',
  //     gender: 'Female',
  //     contactPreference: 'Phone',
  //     phoneNumber: 2345975678,
  //     dateOfBirth: new Date('11/20/1979'),
  //     department: '1',
  //     isActive: true,
  //     photoPath: 'assets/images/mary.png',
  //     password: 'test',
  //   },
  //   {
  //     id: 3,
  //     name: 'Mark',
  //     gender: 'Male',
  //     contactPreference: 'Phone',
  //     phoneNumber: 2345974568,
  //     dateOfBirth: new Date('11/20/1979'),
  //     department: '1',
  //     isActive: true,
  //     photoPath: 'assets/images/mark.png',
  //     password: 'test',
  //   },
  // ];

  baseUrl: string = 'http://localhost:3000/employees';

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse.error.message);
    }
    return new Error('There is problem with the service');
  }

  getEmployeeCount(): number {
    this.httpClient.get<Employee[]>(this.baseUrl).subscribe((params) => {
      return params.length + 1;
    });
    return 4;
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl);
    // .pipe(catchError(this.handleError))
  }
  getEmployee(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
    // .pipe(catchError(this.handleError));
    // this.listEmployees.push(employee);
  }

  deleteEmployee(id: number): Observable<void> {
    // let index = this.listEmployees.findIndex(emp => emp.id === id)
    // this.httpClient.get<Employee[]>(this.baseUrl);
    // if (index !== -1) {
    // this.listEmployees.splice(index,1);
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    // }
  }
}
