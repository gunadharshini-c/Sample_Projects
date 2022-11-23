import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeelist',
  template: `<h2> Employee List </h2> 
  <ul *ngFor="let employee of employees ">
  <li> {{employee}} </li> `,
 
})
export class EmployeelistComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeserviceService) { }

  ngOnInit(): void {
    this.employees= this._employeeService.getEmployee();
  }

}
