import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subreddit } from '../subreddit/subreddit.model';
import { SubredditService } from '../subreddit/subreddit.service';

@Injectable({providedIn: 'root'})
export class DataService{

    constructor(private http: HttpClient, private redditService: SubredditService){}

    fetchReddits(subreddit: string){
        this.http
        .get<Subreddit[]>('https://subreddit-api-dg.herokuapp.com/api/v1/subreddits/' + subreddit)
        .subscribe(reddits => {
            this.redditService.setSubreddits(reddits);
        });
    }
}
