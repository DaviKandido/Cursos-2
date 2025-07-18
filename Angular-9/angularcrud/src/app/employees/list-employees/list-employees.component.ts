import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolvedEmployeeList } from '../resolved-employeelist.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  error: string;

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filtereEmployees(value);
  }

  filtereEmployees(searchString: string): Employee[] {
    return this.employees.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }

  employees: Employee[];
  // employeeToDiplay: Employee;

  filteredEmployees: Employee[];

  dataFromChild: Employee;
  private index: number = 1;

  constructor(private _router: Router, private _route: ActivatedRoute) {
    const resolveData: Employee[] | string =
      this._route.snapshot.data['employeeList'];
    if (Array.isArray(resolveData)) {
      this.employees = resolveData;
      if (this._route.snapshot.queryParamMap.has('searchTerm')) {
        this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
      } else {
        this.filteredEmployees = this.employees;
      }
    } else {
      this.error = resolveData;
    }

  }

  ngOnInit(): void {}

  nextEmployee(): void {
    // this.employeeToDiplay =
    //   this.employees[this.index++ % this.employees.length];
  }

  onDeleteNotification(id: number): void {
    let index = this.filteredEmployees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.filteredEmployees.splice(index, 1);
    }
  }

  // handleNotify(eventData: Employee) {
  //   this.dataFromChild = eventData;
  // }
}
