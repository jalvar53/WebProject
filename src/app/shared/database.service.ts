import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { MediaModel } from './media.model';
import 'rxjs/Rx';
import { MediaService } from './media.service';
import { UserService } from './user.service';

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

  /*editMedia(data) {
    this.http.put('http://localhost:3000/media/' + data._id, data)
      .subscribe(
        (response: any) => {
          this.mediaService.updateMedia(data);
        }
      );
  }*/

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

  deleteMedia(data) {
    this.http.delete('http://localhost:3000/media/' + data.name)
      .subscribe(
        (response: any) => {
          console.log(response);
        }
      )
  }
}
