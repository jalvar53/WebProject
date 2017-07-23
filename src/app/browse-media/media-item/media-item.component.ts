import { Component, Input, OnInit } from '@angular/core';
import { MediaModel } from '../../shared/media.model';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaObj: MediaModel;

  constructor() { }

  ngOnInit() {
  }

}
