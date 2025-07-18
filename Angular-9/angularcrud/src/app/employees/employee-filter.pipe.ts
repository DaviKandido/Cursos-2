import { Employee } from 'src/app/models/employee.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter',
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(employees: Employee[], searchTerm: string): Employee[] {
    if (!employees || !searchTerm) {
      return employees;
    }
    return employees.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
