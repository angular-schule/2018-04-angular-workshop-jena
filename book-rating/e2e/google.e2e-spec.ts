import { GoogleSearchPage } from './google-search.po';
import { browser } from 'protractor';
import { GoogleSearchResultsPage } from './google-search-results.po';

describe('Google', () => {
  beforeAll(() => browser.waitForAngularEnabled(false));

  let resultsPage: GoogleSearchResultsPage;

  beforeEach(() => {
    const searchPage = new GoogleSearchPage();
    resultsPage = searchPage
      .navigateTo()
      .search('Angular');
  });

  it('should have angular.io as first result', () => {

    expect(resultsPage.getFirstResultsUrl())
      .toBe('https://angular.io/');
  });

  afterAll(() => browser.waitForAngularEnabled(true));

});
