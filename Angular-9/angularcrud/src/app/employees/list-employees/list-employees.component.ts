import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'Gk5Hn@example.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
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
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png',
      password: 'test',
    },
    {
      id: 3,
      name: 'mark',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 234597,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mark.png',
      password: 'test',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
