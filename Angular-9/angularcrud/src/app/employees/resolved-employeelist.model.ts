import { Employee } from "../models/employee.model";

export class ResolvedEmployeeList {
  constructor(public employees: Employee[], public error: any = null) {}
}
