import { Employee } from './../model/employeeClass';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee : Employee[];
  constructor() {

  }

  ngOnInit() {

    this.employee = [
        new Employee(1,'ram','it'),
        new Employee(2,'sham','it'),
        new Employee(3,'tam','it'),
        new Employee(4,'jam','it'),
        new Employee(5,'ram','it')
    ];

  }

}
