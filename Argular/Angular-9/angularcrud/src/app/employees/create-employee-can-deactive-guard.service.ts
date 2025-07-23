import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@Injectable({
  providedIn: 'root',
})
export class CreateEmployeeCanDeactiveGuardService
  implements CanDeactivate<CreateEmployeeComponent>
{
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if(component.CreateEmployeeForm.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }

  constructor() {}
}
