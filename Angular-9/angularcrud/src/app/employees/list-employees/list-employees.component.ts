import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
onclick(arg0: any) {
throw new Error('Method not implemented.');
}
  employees: Employee[];
  employeeToDiplay: Employee;

  dataFromChild: Employee;
  private index: number = 1;

  constructor(private _employeeService: EmployeeService, private _router: Router) {
    this.employees = this._employeeService.getEmployees();
  }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDiplay = this.employees[0];
  }

  nextEmployee(): void {
    this.employeeToDiplay =
      this.employees[this.index++ % this.employees.length];
  }

  onClick(EmployeeId: number):void {
    this._router.navigate([`/employees`, EmployeeId]);
  }

  // handleNotify(eventData: Employee) {
  //   this.dataFromChild = eventData;
  // }
}
