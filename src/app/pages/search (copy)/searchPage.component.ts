import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './searchPage.component.html',
  styleUrls: ['./searchPage.component.css']
})
export class SearchPageComponent implements OnInit {
  users: any;
  title = 'Search User';


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = [];
  }

  searchUsers(qry: string) {
    this.userService
      .searchUsers(qry)
      .subscribe(users => this.users = users.items);
  }

  onSubmit(f: NgForm) {
    this.users = [];
    if (f.valid) {
      this.searchUsers(f.value.query);
    }
  }
}
