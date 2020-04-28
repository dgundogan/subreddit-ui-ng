import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Subreddit } from './subreddit.model';

@Injectable()
export class SubredditService {
  redditsChanged = new Subject<Subreddit[]>();

  private subreddits: Subreddit[] = [];

  setSubreddits(subreddits: Subreddit[]){
    this.subreddits = subreddits;
    this.redditsChanged.next(this.subreddits.slice());
  }

  getSubreddits(){
    return this.subreddits.slice();
  }
}
