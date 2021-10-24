import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './historyPage.component.html',
  styleUrls: ['./historyPage.component.css']
})
export class HistoryPageComponent implements OnInit {

  title = 'Search History';
  histories: any = [];

  ngOnInit() {
    this.populateHistory();
  }

  populateHistory() {
    let hd: any = [];
    if (localStorage.getItem('history_data') != null) {
      hd = JSON.parse(localStorage.getItem('history_data') || '');
    }
    this.histories = hd;
  }

  removeHistory(entry: any) {
    console.log(entry);
    const result = this.histories.filter((qw: string) => qw != entry);
    localStorage.setItem("history_data", JSON.stringify(result));
    this.populateHistory();
  }

  removeAll() {
    localStorage.removeItem('history_data');
    this.populateHistory();
  }
}
