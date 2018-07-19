import { Injectable } from '@angular/core';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor() { }

  users = [
    new User("Ravi Singh", "SCSIT, DAVV", "Indore"),
    new User("Bharti Patel", "OIMT", "Damoh"),
    new User("Manisha Patel", "OIMT", "Damoh"),
    new User("Rashmi", "OIMT", "Damoh"),
    new User("Sushma", "OIMT", "Damoh"),
    new User("Deepak", "OIMT", "Damoh"),
    new User("Ekta Nigam", "OIMT", "Damoh"),
    new User("Kratika Yadav", "OIMT", "Damoh"),
    new User("Kanchan Singh", "PIEMR", "Indore")
  ]

  getUsers() {
    return this.users;
  }
}
