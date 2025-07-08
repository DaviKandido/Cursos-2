import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';''
import { Department } from '../../models/department.model';


@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'app-create-employee',
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.scss',
})

export class CreateEmployee {
  fullName!: string; // Add this line
  email!: string;
  gender!:string;
  phoneNumber!: string;
  contactPreference!: string;
  isActive!: boolean;
  department!: string;
  dateOfBirth!: Date;
  photoPath!: File;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
  ];

  saveEmployee(empForm: NgForm){
    console.log(empForm.value);
  }

}
