import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'Gk5Hn@example.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/john.png',
      password: 'test',
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345975678,
      dateOfBirth: new Date('11/20/1979'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/mary.png',
      password: 'test',
    },
    {
      id: 3,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 2345974568,
      dateOfBirth: new Date('11/20/1979'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/mark.png',
      password: 'test',
    },
  ];

  getEmployeeCount(): number {
    return this.listEmployees.length;
  }

  getEmployees(): Observable<Employee[]> {
    return of(this.listEmployees);
  }
  getEmployee(id: number): Observable<Employee> {
    return of(this.listEmployees.find((p) => p.id === id));
  }

  save(employee: Employee): void {
    if (employee.id === null) {
      const maxId: number = this.listEmployees.reduce((e1, e2) => {
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      employee.id = maxId + 1;
      this.listEmployees.push(employee);
    } else {
      let index = this.listEmployees.findIndex((emp) => emp.id === employee.id);
      this.listEmployees[index] = employee;
    }
  }

  deleteEmployee(id:number):void {
    let index = this.listEmployees.findIndex(emp => emp.id === id)
    if (index !== -1) {
      this.listEmployees.splice(index,1);
    }
  }

  constructor() {}
}
