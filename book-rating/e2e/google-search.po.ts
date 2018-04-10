import { browser, $ } from 'protractor';
import { GoogleSearchResultsPage } from './google-search-results.po';

export class GoogleSearchPage {
  navigateTo() {
    browser.get('https://www.google.de');
    return this;
  }

  search(term: string) {
    const searchForm = $('form#tsf');
    const input = searchForm.$('input#lst-ib');

    input.sendKeys(term);
    searchForm.submit();

    return new GoogleSearchResultsPage();
  }
}
