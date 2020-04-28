import { TestBed } from '@angular/core/testing';

import { SubredditService } from './subreddit.service';
import { Subreddit } from './subreddit.model';

describe('SubredditService', () => {
  let service: SubredditService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubredditService]
    });
    service = TestBed.inject(SubredditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be set the subreddits and retrive the same subreddits', () => {
    const expectedSubreddits = [new Subreddit("test","test","test","test")];
    service.setSubreddits(expectedSubreddits);
    expect(service.getSubreddits()).toEqual(expectedSubreddits);
  });
});
