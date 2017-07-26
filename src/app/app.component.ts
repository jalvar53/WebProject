import { Component, OnInit } from '@angular/core';
import { DataBaseService } from './shared/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private databaseService: DataBaseService) {}

  ngOnInit() {
    this.databaseService.fetchAllUsers();
  }
}
