import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../shared/database.service';
import { NgForm } from '@angular/forms';
import { MediaModel } from '../../shared/media.model';
import { Guid } from '../../shared/guid.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-content',
  templateUrl: './create-new-content.component.html',
  styleUrls: ['./create-new-content.component.css']
})
export class CreateNewContentComponent implements OnInit {

  constructor(private databaseService: DataBaseService,
              private router: Router) { }

  ngOnInit() {
  }

  onUpload(form: NgForm) {
    const data = new MediaModel(
      Guid.newGuid(),
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
