import { Employee } from './../../model/employeeClass';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
@Input('data') emp: Employee[];
  constructor() { }

  ngOnInit() {
  }

}
