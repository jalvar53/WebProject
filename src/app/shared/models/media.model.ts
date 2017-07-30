export class MediaModel {

  constructor(
              public _id: string,
              public mediaName: string,
              public url: string,
              public description: string,
              public author: string,
              public genre: string,
              public privacy: string) {}
}
