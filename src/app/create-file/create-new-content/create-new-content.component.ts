import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../shared/services/database.service';
import { NgForm } from '@angular/forms';
import { MediaModel } from '../../shared/models/media.model';
import { Guid } from '../../shared/models/guid.model';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-create-new-content',
  templateUrl: './create-new-content.component.html',
  styleUrls: ['./create-new-content.component.css']
})
export class CreateNewContentComponent implements OnInit {

  currentUser: User;

  constructor(private databaseService: DataBaseService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
  }

  onUpload(form: NgForm) {
    const data = new MediaModel(
      Guid.newMediaGuid(),
      form.value.mediaName,
      form.value.url,
      form.value.description,
      this.currentUser.username,
      form.value.genre,
      form.value.privacy
    );
    this.databaseService.uploadMedia(data);
    this.router.navigate(['/browse']);
  }
}
