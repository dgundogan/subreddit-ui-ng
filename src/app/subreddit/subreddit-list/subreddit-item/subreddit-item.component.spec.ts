import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditItemComponent } from './subreddit-item.component';

describe('SubredditItemComponent', () => {
  let component: SubredditItemComponent;
  let fixture: ComponentFixture<SubredditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
