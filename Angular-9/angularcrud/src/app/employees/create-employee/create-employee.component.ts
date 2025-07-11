import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { Employee } from 'src/app/models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
      }
    );
  }

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null,
    password: null,
  };

  previewPhoto: boolean = false;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
  ];
  fullName: any;

  saveEmployee(newEmployee: Employee) {
    console.log(newEmployee);
    this.employee = {
      id: null,
      name: null,
      gender: null,
      contactPreference: null,
      email: null,
      phoneNumber: null,
      dateOfBirth: null,
      department: null,
      isActive: null,
      photoPath: null,
      password: null,
    };
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit(): void {}
}
