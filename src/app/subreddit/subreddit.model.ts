export class Subreddit {
  author: string;
  id: string;
  title: string;
  url: string;

  constructor(author: string, id: string, title: string, url: string) {
    this.author = author;
    this.id = id;
    this.title = title;
    this.url = url;
  }
}
