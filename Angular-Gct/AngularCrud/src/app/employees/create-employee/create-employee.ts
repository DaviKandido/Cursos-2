import { Employee } from './../../models/employee.model';
import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Department } from '../../models/department.model';
import { ConfirmEqualValidatorDirective } from '../../shared/confirm-equal-validator.directive';
import { SelectRequiredValidatorDirective } from '../../shared/select-required-validator.directive';

@Component({
  imports: [
    FormsModule,
    JsonPipe,
    CommonModule,
    ConfirmEqualValidatorDirective,
    SelectRequiredValidatorDirective,
  ],
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
  department!: string;
  dateOfBirth!: Date;
  photoPath!: File;
  password!: string;
  confirmPassword!: string;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    email: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null,
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
      password: null,
      confirmPassword: null,
    };
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
