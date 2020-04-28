import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditListComponent } from './subreddit-list.component';
import { SubredditService } from '../subreddit.service';

describe('SubredditListComponent', () => {
  let component: SubredditListComponent;
  let fixture: ComponentFixture<SubredditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditListComponent ],
      providers: [SubredditService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
