import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { EmployeeService } from './employee.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGuardServiceService implements CanActivate {

  constructor(private _employeeService: EmployeeService, private _router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._employeeService.getEmployee(+route.paramMap.get('id')).pipe(
      map(employee => {
        const employeeExists = !!employee;
        if (employeeExists) {
          return true;
        } else {
          this._router.navigate(['/notFound']);
          return false;
        }
      }),
      catchError(error => {
        console.log(error)
        return of(false);
      })
    );

  }
}
