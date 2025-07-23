import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGuardServiceService implements CanActivate {

  constructor(private _employeeService: EmployeeService, private _router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const employeeExist = !!this._employeeService.getEmployee(+route.paramMap.get('id'));
    console.log(this._employeeService.getEmployee(+route.paramMap.get('id')));
    if (employeeExist) {
      return true;
    }else{
      this._router.navigate(['/notFound']);
      return false;
    }

  }
}
