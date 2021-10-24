import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-search-result-page',
  templateUrl: './searchResultPage.component.html',
  styleUrls: ['./searchResultPage.component.css']
})
export class SearchResultPageComponent implements OnInit {
  title = 'Search Result';
  users: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      const qry = params['qry'];
      this.userService
        .searchUsers(qry)
        .subscribe(users => this.users = users.items);

      let hd: any = [];
      if (localStorage.getItem('history_data') != null) {
        hd = JSON.parse(localStorage.getItem('history_data') || '');
      }
      const result = hd.filter((qw: string) => qw != qry);
      result.push(qry);
      localStorage.setItem("history_data", JSON.stringify(result.reverse()));
    });
  }
}
