import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subreddit } from '../subreddit/subreddit.model';
import { SubredditService } from '../subreddit/subreddit.service';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class DataService{

    constructor(private http: HttpClient, private redditService: SubredditService){}

    fetchReddits(subreddit: string){
        this.http
        .get<Subreddit[]>(environment.apiUrl + 'subreddits/' + subreddit)
        .subscribe(reddits => {
            this.redditService.setSubreddits(reddits);
        });
    }
}
