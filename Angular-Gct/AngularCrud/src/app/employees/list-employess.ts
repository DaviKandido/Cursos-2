  import { Component } from '@angular/core';
  import { Employee } from '../models/employee.model';
  import { CommonModule, NgOptimizedImage } from '@angular/common';

  @Component({
    imports: [CommonModule],
    templateUrl: './list-employess.html',
    styleUrl: './list-employess.scss'
  })
  export class ListEmployess {
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
        photoPath: '/assets/imgs/john.png'
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
        photoPath: '/assets/imgs/mary.png'
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
        photoPath: '/assets/imgs/mark.png'
      }

    ]
  }
