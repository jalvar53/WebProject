import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../shared/database.service';
import { NgForm } from '@angular/forms';
import { MediaModel } from '../../shared/media.model';

@Component({
  selector: 'app-create-audio',
  templateUrl: './create-audio.component.html',
  styleUrls: ['./create-audio.component.css']
})
export class CreateAudioComponent implements OnInit {

  constructor(private dbService: DataBaseService) { }

  ngOnInit() {
  }

  onUploadAudio(form: NgForm) {
    const data = new MediaModel(form.value.mediaName,
      form.value.description,
      form.value.author,
      form.value.genre
    );
    this.dbService.uploadMedia(data);
  }
}
