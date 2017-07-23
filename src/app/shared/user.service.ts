import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users = [];

  addNewUser(data) {
    this.users.push(data);
  }
}
