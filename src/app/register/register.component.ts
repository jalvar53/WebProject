import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { Guid } from '../shared/guid.model';
import { DataBaseService } from '../shared/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private databaseService: DataBaseService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const user = new User(
      Guid.newGuid(),
      form.value.username,
      form.value.password,
      form.value.email
    );
    this.databaseService.createUser(user);
    this.router.navigate(['/']);
  }

}
