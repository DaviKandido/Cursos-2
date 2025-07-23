import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { error } from 'console';

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


  private handleError(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse.error.message);
    }
    return new Error("There is problem with the service");
  }

  getEmployeeCount(): number {
     this.httpClient.get<Employee[]>('http://localhost:3000/employees').subscribe(params => {
      return params.length + 1
    });
    return 4;
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees').pipe(
      catchError(this.handleError)
    )
  }
  getEmployee(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(
      `http://localhost:3000/employees/${id}`
    );
  }

  save(employee: Employee): void {
    if (employee.id === null) {
      // const maxId: number = this.listEmployees.reduce((e1, e2) => {
      //   return e1.id > e2.id ? e1 : e2;
      // }).id;
      // employee.id = maxId + 1;
      this.httpClient.post<Employee>(
        'http://localhost:3000/employees',
        employee
      );
      // this.listEmployees.push(employee);
    } else {
      this.httpClient.put<Employee>(
        `http://localhost:3000/employees/${employee.id}`,
        employee
      );
      // let index = this.listEmployees.findIndex((emp) => emp.id === employee.id);
      // this.listEmployees[index] = employee;
    }
  }

  deleteEmployee(id: number): void {
    // let index = this.listEmployees.findIndex(emp => emp.id === id)
    // this.httpClient.get<Employee[]>('http://localhost:3000/employees');
    // if (index !== -1) {
      // this.listEmployees.splice(index,1);
      this.httpClient.delete<Employee>(
        `http://localhost:3000/employees/${employee.id}`);
    // }
  }
}
