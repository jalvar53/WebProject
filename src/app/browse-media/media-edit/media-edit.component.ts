import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataBaseService } from '../../shared/database.service';
import { MediaModel } from '../../shared/media.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Guid } from '../../shared/guid.model';

@Component({
  selector: 'app-media-edit',
  templateUrl: './media-edit.component.html',
  styleUrls: ['./media-edit.component.css']
})
export class MediaEditComponent implements OnInit {

  editee: string;

  constructor(private databaseService: DataBaseService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.editee = params['name'];
        }
      );
  }

  getUrlFragment() {
    this.route.fragment.subscribe(
      (fragment: string) => {
        this.editee = fragment;
      }
    );
  }

  onSubmit(form: NgForm) {
    this.getUrlFragment();

    const data = new MediaModel(
      this.editee,
      form.value.mediaName,
      form.value.description,
      form.value.author,
      form.value.genre,
      form.value.mediaType
    );
    this.databaseService.uploadMedia(data);
    this.router.navigate(['/browse']);
  }

}
