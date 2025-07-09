import { Employee } from './../../models/employee.model';
import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Department } from '../../models/department.model';

@Component({
  imports: [FormsModule, JsonPipe, CommonModule],
  selector: 'app-create-employee',
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.scss',
})
export class CreateEmployee {
  email!: string;
  gender!: string;
  phoneNumber!: string;
  contactPreference!: string;
  isActive!: boolean;
  department!: "-1";
  dateOfBirth!: Date;
  photoPath!: File;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null,
  };

  previewPhoto: boolean = false;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
  ];

  saveEmployee(newEmployee: Employee) {
    console.log(newEmployee);
    this.employee = {
      id: null,
      name: null,
      gender: null,
      contactPreference: null,
      email: null,
      dateOfBirth: null,
      department: null,
      isActive: null,
      photoPath: null,
    };
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
