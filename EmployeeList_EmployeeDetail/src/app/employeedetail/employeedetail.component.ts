import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeedetail',
  template : `<h2> Employee List </h2> 
  <ul *ngFor="let employee of employees ">
  <li> {{employee}} </li> `,
})
export class EmployeedetailComponent implements OnInit {
  public employees = [];
  constructor(private _employeeservice: EmployeeserviceService) {
   }

  ngOnInit(): void {
    this.employees = this._employeeservice.getEmployee();
  }

}
