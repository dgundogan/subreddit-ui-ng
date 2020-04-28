import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SubredditService } from '../subreddit.service';
import { Subreddit } from '../subreddit.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subreddit-list',
  templateUrl: './subreddit-list.component.html',
  styleUrls: ['./subreddit-list.component.scss'],
})
export class SubredditListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [ 'author', 'id', 'title', 'url'];
  dataSource = new MatTableDataSource<Subreddit>();

  subscription: Subscription;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private subredditService: SubredditService){}

  ngOnInit() {
    this.subscription = this.subredditService.redditsChanged
    .subscribe(
      (reddits: Subreddit[]) => {
        this.dataSource.data = reddits;
      }
    );
    this.dataSource.data = this.subredditService.getSubreddits();
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

