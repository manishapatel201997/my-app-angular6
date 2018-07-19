import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchloop',
  templateUrl: './switchloop.component.html',
  styleUrls: ['./switchloop.component.css']
})
export class SwitchloopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  infos=[
  {
    "name":"Manu",
    "rollno":123456,
    "city":"Narshinhgad",
    "collage":"OIMT"
  },
  {
    "name":"Kratika",
    "rollno":123456,
    "city":"Panna",
    "collage":"OIMT"
  },{
    "name":"Bharti",
    "rollno":123456,
    "city":"Hatta",
    "collage":"OIMT"
  },{
    "name":"Rashmi",
    "rollno":123456,
    "city":"Damoh",
    "collage":"OIMT"
  },
  {
    "name":"Sushma",
    "rollno":123456,
    "city":"Chindwada",
    "collage":"OIMT"
  },
  {
    "name":"Ekta",
    "rollno":123456,
    "city":"Panna",
    "collage":"Bhopal"
  },
  {
    "name":"Deepak",
    "rollno":123456,
    "city":"A.P",
    "collage":"OIMT"
  }
  ]
    
}
