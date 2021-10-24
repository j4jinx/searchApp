import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-form-page',
  templateUrl: './searchFormPage.component.html',
  styleUrls: ['./searchFormPage.component.css']
})
export class SearchFormPageComponent {
  title = 'Search User';

  constructor(private router: Router) { }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.router.navigate(['/search/result', f.value.query]);
    }
  }
}
