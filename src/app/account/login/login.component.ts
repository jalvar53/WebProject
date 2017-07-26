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

  constructor(private databaseService: DataBaseService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.databaseService.validateUser(username, password);
    setTimeout(
      () => {
        const userOk = this.userService.isLogged();
        if (userOk) {
          this.userService.login(username);
          this.router.navigate(['/browse']);
        } else {
          this.router.navigate(['/']);
        }
      }, 500);
  }

}
