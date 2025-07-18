import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { Employee } from 'src/app/models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>;
  panelTitle: string;

  @ViewChild('employeeForm') public CreateEmployeeForm: NgForm;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.datepickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
      }
    );
  }

  confirmPassword: string = '';

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
    confirmPassword: null,
  };

  previewPhoto: boolean = false;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
  ];
  fullName: any;

  saveEmployee(): void {
    if(this.employee.id == null){
      this._employeeService.saveEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this.CreateEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    }else{
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.CreateEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );

    }

    // this._employeeService.save(this.employee);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((parameterMap) => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
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
        confirmPassword: null,
      };
      this.CreateEmployeeForm.reset();
      this.panelTitle = 'Create';
    } else {
      this._employeeService.getEmployee(id).subscribe(
        (employee) => (this.employee = employee),
        (erro: any) => console.log(erro)
      );
      this.panelTitle = 'Update';
    }
  }
}
