import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../shared/services/database.service';
import { NgForm } from '@angular/forms';
import { MediaModel } from '../../shared/models/media.model';
import { Guid } from '../../shared/models/guid.model';
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
      Guid.newMediaGuid(),
      form.value.mediaName,
      form.value.url,
      form.value.description,
      form.value.author,
      form.value.genre
    );
    this.databaseService.uploadMedia(data);
    this.router.navigate(['/browse']);
  }
}
