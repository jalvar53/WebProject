import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { MediaModel } from '../shared/media.model';
import { DataBaseService } from '../shared/database.service';

@Component({
  selector: 'app-browse-media',
  templateUrl: './browse-media.component.html',
  styleUrls: ['./browse-media.component.css']
})
export class BrowseMediaComponent implements OnInit {

  mediaListFull: MediaModel[];

  constructor(private mediaService: MediaService,
              private databaseService: DataBaseService) { }

  ngOnInit() {
    this.databaseService.fetchAllMedia();
    setTimeout(
      () => {
        this.mediaListFull = this.mediaService.getMediaList();
      }, 300
    );
  }

  onRefresh() {
    this.databaseService.fetchAllMedia();
    setTimeout(
      () => {
        this.mediaListFull = this.mediaService.getMediaList();
      }, 300
    );
  }

}
