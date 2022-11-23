import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeserviceService {

  constructor() { }
  getEmployee(){
    return [
      {"id" : 124, "name" : "Gunadharshini", "age" : 20 },
      {"id" : 158, "name" : "Ruthuvershon", "age" : 20},
      {"id" : 146, "name" : "Monesh", "age" : 24}
    ];
  }
}
