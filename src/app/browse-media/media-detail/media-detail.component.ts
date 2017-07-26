import { Component, OnInit } from '@angular/core';
import { MediaModel } from '../../shared/media.model';
import { MediaService } from '../../shared/media.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataBaseService } from '../../shared/database.service';

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit {

  mediaObj: MediaModel;
  name: string;
  id: string;

  constructor(private mediaService: MediaService,
              private databaseService: DataBaseService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
          this.mediaObj = this.mediaService.getOneMedia(this.name);
          this.id = this.mediaService.findIdByName(this.name);
          console.log(this.id);
        }
      );
  }

  onReturn() {
    this.router.navigate(['/browse']);
  }

  onEditMedia() {
    this.router.navigate(['/edit'], {fragment: this.id});
  }

  onDeleteMedia() {
    this.databaseService.deleteMedia(this.mediaObj);
    this.router.navigate(['browse']);
  }

}
