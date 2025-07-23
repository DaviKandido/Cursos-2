import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Route,
  Router,
  RouterState,
  RouterStateSnapshot,
} from '@angular/router';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeOneResolverService implements Resolve<Employee> {
  constructor(private _employeeService: EmployeeService, private _router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee> {
    return this._employeeService.getEmployee(+route.paramMap.get('id'));
  }
}
