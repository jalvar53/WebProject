import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataBaseService } from '../../shared/database.service';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAlreadyExists = false;
  emailAlreadyExists = false;

  constructor(private databaseService: DataBaseService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    const userOk = this.databaseService.validateUser(username, password);
    console.log(userOk);
    if (userOk) {
      this.userService.login();
      this.router.navigate(['/browse']);
    } else {
      this.router.navigate(['/']);
    }
  }

}
