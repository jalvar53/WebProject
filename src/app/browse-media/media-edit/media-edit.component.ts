import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataBaseService } from '../../shared/services/database.service';
import { MediaModel } from '../../shared/models/media.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Guid } from '../../shared/models/guid.model';
import { MediaService } from '../../shared/services/media.service';

@Component({
  selector: 'app-media-edit',
  templateUrl: './media-edit.component.html',
  styleUrls: ['./media-edit.component.css']
})
export class MediaEditComponent implements OnInit {

  currentMediaId: string;
  editee: MediaModel;

  constructor(private databaseService: DataBaseService,
              private route: ActivatedRoute,
              private router: Router,
              private mediaService: MediaService) { }

  ngOnInit() {
    this.route.fragment.subscribe(
      (fragment: string) => {
        this.currentMediaId = fragment;
        this.getUrlFragment();
      }
    );
  }

  getUrlFragment() {
    this.editee = this.mediaService.findMediaById(this.currentMediaId);
  }

  onSubmit(form: NgForm) {

    const data = new MediaModel(
      this.currentMediaId,
      form.value.mediaName,
      form.value.url,
      form.value.description,
      form.value.author,
      form.value.genre,
      form.value.privacy
    );
    this.databaseService.editMedia(data);
    this.router.navigate(['/browse']);
  }

}
