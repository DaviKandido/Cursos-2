import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css'],
})
export class DisplayEmployeeComponent implements OnInit {
  selectedEmployeeId: number;
  @Input() employee: Employee;
  @Input() searchTerm: string;
  @Output() noifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmarDelete = false;
  isHidden = true;

  getEmployeeNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _employeeService: EmployeeService
  ) {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  viewEmployee(): void {
    this._router.navigate([`/employees`, this.employee.id], {
      queryParams: { searchTerm: this.searchTerm },
    });
  }

  editEmployee(): void {
    this._router.navigate(['/edit', this.employee.id]);
  }

  deleteEmployee(): void {
    this._employeeService.deleteEmployee(this.employee.id).subscribe(() => {
      this.noifyDelete.emit(this.employee.id);
    },
    (err) => console.log(err)
  );
  }

  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  ngOnInit(): void {}

  // handleClick() {
  //   this.notify.emit(this.employee);
  // }

  // private _employeeId: number;
  // private _employee: Employee;

  // @Input()
  // set employeeId(val: number) {
  //   console.log(
  //     `employee: changed from ${JSON.stringify(
  //       this._employeeId
  //     )} to ${JSON.stringify(val)}`
  //   );
  //   this._employeeId = val;
  // }
  // get employeeId(): number {
  //   return this._employeeId;
  // }

  // @Input()
  // set employee(val: Employee) {
  //   console.log(
  //     `employeeId: changed from ${JSON.stringify(
  //       this._employee
  //     )} to ${JSON.stringify(val)}`
  //   );

  //   this._employee = val;
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   for (const propName of Object.keys(changes)) {
  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue);
  //     const to = JSON.stringify(change.currentValue);
  //
  //     console.log(`${propName}: changed from ${from} to ${to}`);
  //   }
  // }
}
