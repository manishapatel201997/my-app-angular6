import { Component, OnInit } from '@angular/core';

import { User } from '../user';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }

  getUsers() {
    this.users = this.usersService.getUsers();
  }

}
