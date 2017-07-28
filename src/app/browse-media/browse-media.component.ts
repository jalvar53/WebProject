import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaService } from '../shared/services/media.service';
import { MediaModel } from '../shared/models/media.model';
import { DataBaseService } from '../shared/services/database.service';

@Component({
  selector: 'app-browse-media',
  templateUrl: './browse-media.component.html',
  styleUrls: ['./browse-media.component.css']
})
export class BrowseMediaComponent implements OnInit {

  mediaListFull: MediaModel[];
  searchedItem: MediaModel;
  searchClicked = false;
  @ViewChild('search') searchValue: any;

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
    this.searchClicked = false;
  }

  onSearch() {
    this.searchClicked = true;
    const value = this.searchValue.nativeElement.value;
    this.databaseService.getMediaByName(value);
    this.searchedItem = this.mediaService.getOneMedia(value);
  }

}
