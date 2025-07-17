import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;
  isHidden = true;

  constructor(
    private _route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      this._employeeService.getEmployees().subscribe((employeeValue) => {
        this._id = +params.get('id') % employeeValue.length;
        this._employeeService
          .getEmployee(this._id)
          .subscribe((employee) => (this.employee = employee));
      });
    });
  }

  viewNextEmployee(): void {
    this._id = this._id + 1;
    this._router.navigate(['employees', this._id], {
      queryParamsHandling: 'merge',
    });
  }
}
