import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-error-page',
  templateUrl: './errorPage.component.html',
  styleUrls: ['./errorPage.component.css']
})
export class ErrorPageComponent {
  constructor(private location: Location) { }

  back(): void {
    this.location.back()
  }
}
