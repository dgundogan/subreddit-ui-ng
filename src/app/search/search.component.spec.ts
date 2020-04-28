import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from './search.component';
import { DataService } from '../shared/data.service';
import { SubredditService } from '../subreddit/subreddit.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [HttpClientTestingModule],
      providers: [DataService, SubredditService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a label called Subreddit', () => {
    let fixture = TestBed.createComponent(SearchComponent);
    let app = fixture.debugElement.componentInstance;
    app.subreddit = "News";
    fixture.detectChanges();

  });
});
