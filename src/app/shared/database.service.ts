import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { MediaModel } from './media.model';
import 'rxjs/Rx';
import { MediaService } from './media.service';

@Injectable()
export class DataBaseService {

  constructor(private http: Http,
              private mediaService: MediaService) {}

  uploadMedia(data) {
    console.log(data);
    this.http.post('http://localhost:3000/create-media/media/new', data)
      .subscribe(
        (response: any) => {
          console.log(response);
        }
      );
  }

  editMedia(data) {
    this.http.put('http://localhost:3000/media/' + data.mediaName, data)
      .subscribe(
        (response: any) => {
          console.log(response);
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

  deleteMedia(data) {
    this.http.delete('http://localhost:3000/media/' + data.name)
      .subscribe(
        (response: any) => {
          console.log(response);
        }
      )
  }
}
