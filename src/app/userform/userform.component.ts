import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentInformation } from '../student-information';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  @ViewChild('f')signupForm: NgForm;
  genders = ['male','female'];
  constructor() { }

  student = new StudentInformation("manisha","OIMT","Damoh",123456,"manishakachhi183@gmail.com");

  ngOnInit() {
  }
 

  /*onSubmit(form: ElementRef){
    console.log(form);
  }*/
  onSubmit(){
  console.log(this.signupForm);
  }

}
