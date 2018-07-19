import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  test_bool: boolean;
  t:string;

  btnText: string = 'Display Message';

  users = [
    {
      "name" : "Bharti Patel",
      "city" : "Damoh",
      "college" : "OIMT, Damoh, MP, India",
      "age" : 20,
      "profile_image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2nKIMfoB0mb0SZZq6aMGvb9z3okuii_ysylVoL5VNDSOp2tp"
    },
    {
      "name" : "Manisha ",
      "city" : "Damoh",
      "college" : "OIMT, Damoh, MP, India",
      "age" : 22,
      "profile_image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2nKIMfoB0mb0SZZq6aMGvb9z3okuii_ysylVoL5VNDSOp2tp"
    },
    {
      "name" : "Sushma Patel",
      "city" : "Damoh",
      "college" : "OIMT, Damoh, MP, India",
      "age" : 10,
      "profile_image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2nKIMfoB0mb0SZZq6aMGvb9z3okuii_ysylVoL5VNDSOp2tp"
    },
    {
      "name" : "Rashmi Patel",
      "city" : "Damoh",
      "college" : "OIMT, Damoh, MP, India",
      "age" : 12,
      "profile_image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2nKIMfoB0mb0SZZq6aMGvb9z3okuii_ysylVoL5VNDSOp2tp"
    },
    {
      "name" : "Deepak Patel",
      "city" : "Damoh",
      "college" : "OIMT, Damoh, MP, India",
      "age" : 10,
      "profile_image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2nKIMfoB0mb0SZZq6aMGvb9z3okuii_ysylVoL5VNDSOp2tp"
    },
    {
      "name" : "Ekta Patel",
      "city" : "Damoh",
      "age" : 10,
      "college" : "OIMT, Damoh, MP, India",
      "profile_image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2nKIMfoB0mb0SZZq6aMGvb9z3okuii_ysylVoL5VNDSOp2tp"
    }, 
    {
      "name" : "Ravi Patel",
      "city" : "Indore",
      "age" : 29,
      "college" : "SCSIT, DAVV, Indore, MP, India",
      "profile_image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2nKIMfoB0mb0SZZq6aMGvb9z3okuii_ysylVoL5VNDSOp2tp"
    }

  ]

  constructor() { }


  ngOnInit() {
    this.title = "This is simple title message."
  }

  

  setFlagValue() {
    if (this.test_bool == true) {
      this.test_bool = false;
    
    } else {
      this.test_bool = true;
      this.btnText = 'Hide Message'
    }
  }

}
