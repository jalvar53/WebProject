import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from '../../shared/models/guid.model';
import { User } from '../../shared/models/user.model';
import { DataBaseService } from '../../shared/services/database.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor(private databaseService: DataBaseService,
              private userService: UserService,
              private router: Router) { }

  onDeleteAccount() {
    this.databaseService.removeUser(this.userService.getCurrentUser());
    this.router.navigate(['/']);
  }

  onEditAccount(form: NgForm) {
    const editee = this.userService.findIdByUsername(form.value.oldUsername);

    const editedAccount: User = {
      _id: editee._id,
      username: form.value.oldUsername,
      email: form.value.email,
      password: form.value.password
    }
    this.databaseService.editUser(editedAccount);
    this.router.navigate(['/browse']);
  }
}
