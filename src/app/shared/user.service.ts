import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {

  public users = [];
  public logged = false;

  addNewUser(data) {
    this.users.push(data);
    console.log(this.logged);
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  findIdByUsername(username: string) {
    const index = this.users.findIndex(x => x.username === username);
    console.log(this.users);
    console.log(this.users[index]);
    return this.users[index];
  }

  updateUser(updatedUser: User) {
    const index = this.users.findIndex(x => x._id === updatedUser._id);
    this.users[index] = updatedUser;
  }

  validateUsernameAndPassword(user, password) {
    if (user.password === password) {
      this.logged = true;
    }
  }

  checkIfUserExists(username) {
    for (const user of this.users) {
      if (username === user.username) {
        return true;
      }
    }
    return false;
  }

  checkIfEmailExists(email) {
    for (const user of this.users) {
      if (email === user.email) {
        return true;
      }
    }
    return false;
  }

  isLogged() {
    return this.logged;
  }

  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }
}
