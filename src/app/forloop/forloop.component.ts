import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users1=[
  {
    "name":"Manisha"
  
  },
  {
    "name":"Kratika"
  
  }
  ]


}
