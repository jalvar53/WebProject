import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/models/user.model';
import { Guid } from '../../shared/models/guid.model';
import { DataBaseService } from '../../shared/services/database.service';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userAlreadyExists = false;
  emailAlreadyExists = false;

  constructor(private databaseService: DataBaseService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const user = new User(
      Guid.newUserGuid(),
      form.value.username,
      form.value.password,
      form.value.email
    );
    const userExists = !this.userService.checkIfUserExists(form.value.username);
    const emailExists = !this.userService.checkIfEmailExists(form.value.username);
    if (userExists && emailExists) {
      this.databaseService.createUser(user);
      this.userService.login(user.username);
      this.router.navigate(['/browse']);
    } else {
      this.userAlreadyExists = true;
      this.emailAlreadyExists = true;
    }

  }

}
