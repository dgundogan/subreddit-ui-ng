import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Search SubReddit App', () => {
  let page: AppPage;
  const searchButton = element(by.id('search'));

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a title', () => {
    page.navigateTo();
    element(by.id('subreddit')).sendKeys("News");
    searchButton.click();
    browser.sleep(5000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
