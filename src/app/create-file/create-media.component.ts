import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-media',
  templateUrl: './create-media.component.html',
  styleUrls: ['./create-media.component.css']
})
export class CreateMediaComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onUploadAudio() {
    this.router.navigate(['audio'], {relativeTo: this.route});
  }

  onUploadFile() {
    this.router.navigate(['file'], {relativeTo: this.route});
  }

  onUploadImage() {
    this.router.navigate(['image'], {relativeTo: this.route});
  }

  onUploadVideo() {
    this.router.navigate(['video'], {relativeTo: this.route});
  }

}
