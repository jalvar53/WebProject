import { Component, OnInit } from '@angular/core';
import { DataBaseService } from './shared/services/database.service';
import { User } from './shared/models/user.model';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[];

  constructor(private databaseService: DataBaseService,
              private userService: UserService) {}

  ngOnInit() {
    this.databaseService.fetchAllUsers();
    this.users = this.userService.getUsers();
  }
}
