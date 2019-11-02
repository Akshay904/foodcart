import { Student } from './../../model/studentClass';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('data') stud: Student[];

  constructor() { }

  ngOnInit() {
  }

}
