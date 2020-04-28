import { DataService } from './data.service';
import { SubredditService } from '../subreddit/subreddit.service';
import { Subreddit } from '../subreddit/subreddit.model';
import { of } from 'rxjs/internal/observable/of';

describe('Data service', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let dataService: DataService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    dataService = new DataService(httpClientSpy as any, new SubredditService());
  });

});
