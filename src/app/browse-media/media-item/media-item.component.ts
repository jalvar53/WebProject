import { Component, Input, OnInit } from '@angular/core';
import { MediaModel } from '../../shared/models/media.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaObj: MediaModel;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['/browse']);
  }

}
