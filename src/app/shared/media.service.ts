import { MediaModel } from './media.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {

  private mediaList: MediaModel[];

  setMediaList(media) {
    this.mediaList = media;
  }

  getMediaList() {
    return this.mediaList.slice();
  }
}
