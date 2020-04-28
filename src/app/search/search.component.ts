import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  subreddit: string;
  constructor(private dataService: DataService) {}

  onSearch() {
    this.dataService.fetchReddits(this.subreddit);
  }
}
