import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-search-profile-page',
  templateUrl: './searchProfilePage.component.html',
  styleUrls: ['./searchProfilePage.component.css']
})
export class SearchProfilePageComponent implements OnInit {
  title = 'User Profile';

  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService
        .getUser(username)
        .subscribe(user => this.user = user);
    });
  }
}
