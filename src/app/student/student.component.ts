import { Component, OnInit } from '@angular/core';
import { Student } from '../model/studentClass';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student : Student[];

  constructor() {

   this.student = [
    new Student(1,'ram'),
    new Student(2,'sham'),
    new Student(3,'tam'),
   ]

  }

  ngOnInit() {
  }

}
