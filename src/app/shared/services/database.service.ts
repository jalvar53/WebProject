import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { MediaModel } from '../models/media.model';
import 'rxjs/Rx';
import { MediaService } from './media.service';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable()
export class DataBaseService {

  constructor(private http: Http,
              private mediaService: MediaService,
              private userService: UserService) {}

  createUser(data) {
    this.http.post('http://localhost:3000/user/new', data)
      .subscribe(
    (response: any) => {
          this.userService.addNewUser(data);
          this.userService.login(data.username);
        }
      );
  }

  removeUser(data) {
    // console.log(data._id);
    this.http.delete('http://localhost:3000/user/edit/' + data._id)
      .subscribe(
        (response: any) => {
          this.userService.deleteAccount(data);
          this.userService.logout();
        }
      )
  }

  validateUser(username, password) {
    this.http.get('http://localhost:3000/user/' + username)
      .map(
        (response: Response) => {
          const user: User = response.json();
          return user;
        }
      )
      .subscribe(
        (user: User) => {
            this.userService.validateUsernameAndPassword(user, password);
        });
  }

  editUser(data) {
    console.log('Data._id' + data._id);
    this.http.put('http://localhost:3000/user/edit/' + data._id, data)
      .subscribe(
        (response: any) => {
        this.userService.updateUser(data);
    });
  }

  fetchAllUsers() {
    this.http.get('http://localhost:3000/users')
      .map(
        (response: Response) => {
          const users: User[] = response.json();
          return users;
        }
      )
      .subscribe(
        (users: User[]) => {
          this.userService.setUsers(users);
        }
      );
  }

  uploadMedia(data) {
    this.http.post('http://localhost:3000/create-media/media/new', data)
      .subscribe(
      (response: any) => {
        this.mediaService.addMedia(data);
      }
    );
  }

  editMedia(data) {
    this.http.put('http://localhost:3000/media/' + data._id, data)
      .subscribe(
        (response: any) => {
          this.mediaService.updateMedia(data);
        }
      );
  }

  fetchAllMedia() {
    this.http.get('http://localhost:3000/media')
      .map(
        (response: Response) => {
          const media: MediaModel[] = response.json();
          return media;
        }
      )
      .subscribe(
        (media: MediaModel[]) => {
          this.mediaService.setMediaList(media);
        }
      );
  }

  getMediaByName(searchValue: string) {
    this.http.get('http://localhost:3000/media/byName/' + searchValue)
      .map(
        (response: Response) => {
          const media: MediaModel = response.json();
          return media
        }
      )
      .subscribe(
        (media: MediaModel) => {
          this.mediaService.setOneMedia(media);
        }
      );
  }

  deleteMedia(data) {
    this.http.delete('http://localhost:3000/media/' + data._id)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.mediaService.deleteMedia(data);
        }
      )
  }
}
