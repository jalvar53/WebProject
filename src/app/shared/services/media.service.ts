import { MediaModel } from '../models/media.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {

  private mediaList: MediaModel[] = [];
  private searchedMedia: MediaModel;

  setMediaList(media) {
    this.mediaList = media;
  }

  setOneMedia(media) {
    this.searchedMedia = media;
  }

  addMedia(newMedia: MediaModel) {
    this.mediaList.push(newMedia);
  }

  updateMedia(newMedia: MediaModel) {
    const index = this.mediaList.findIndex(x => x._id === newMedia._id);
    this.mediaList[index] = newMedia;
  }

  deleteMedia(newMedia: MediaModel) {
    const index = this.mediaList.findIndex(x => x._id === newMedia._id);
    this.mediaList.slice(index, 1);
  }

  getMediaList() {
    return this.mediaList;
  }

  findMediaById(_id: string) {
    const index = this.mediaList.findIndex(x => x._id === _id);
    return this.mediaList[index];
  }

  findIdByName(name: string) {
    for (const media of this.mediaList) {
      if (media.mediaName === name) {
        return media._id;
      }
    }
  }

  findMediaByName(mediaName) {
    for (const media of this.mediaList) {
      if (media.mediaName === mediaName) {
        return media;
      }
    }
  }

  getOneMedia(mediaName: string) {
    const media = this.findMediaByName(mediaName);
    return media;
  }
}
