import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import {StudentService} from '../student.service'
@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor() { }

  

       stu :StudentInformation[];

  ngOnInit() {
  this.StudentInformation();
    console.log(this.stu);
  }

  getStudentInformation() {
    this.stu = this.studentService.getStudentInformation();
  }

}
