import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

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
      phoneNumber: 234597,
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
      phoneNumber: 234597,
      dateOfBirth: new Date('11/20/1979'),
      department: '1',
      isActive: true,
      photoPath: 'assets/images/mark.png',
      password: 'test',
    },
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find((p) => p.id === id);
  }

  save(Employee: Employee): void {
    this.listEmployees.push(Employee);
  }

  constructor() {}
}
