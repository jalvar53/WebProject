import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService,
              private router: Router) { }

  onLogout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  onConfigure() {
    this.router.navigate(['/settings']);
  }

}
