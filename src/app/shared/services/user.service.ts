import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  public users = [];
  public currentUser: User;
  public logged = false;

  addNewUser(data) {
    this.users.push(data);
    console.log(this.logged);
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUsers() {
    return this.users;
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  findIdByUsername(username: string) {
    const index = this.users.findIndex(x => x.username === username);
    return this.users[index];
  }

  updateUser(updatedUser: User) {
    const index = this.users.findIndex(x => x._id === updatedUser._id);
    this.users[index] = updatedUser;
  }

  deleteAccount(user: User) {
    const index = this.users.findIndex(x => x._id === user._id);
    this.users.splice(index, 1);
  }

  validateUsernameAndPassword(user, password) {
    console.log(user.password === password);
    if (user.password === password) {
      this.logged = true;
      this.currentUser = user;
      console.log('Aca asigno a current user a ' + user);
    } else {
      this.logged = false;
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

  login(username) {
    this.logged = true;
    this.currentUser = this.findIdByUsername(username);
  }

  logout() {
    this.logged = false;
  }
}
