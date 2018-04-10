import { $, $$ } from 'protractor';

export class GoogleSearchResultsPage {
  getResults() {
    const resultsContainer = $('div.srg');
    return resultsContainer.$$('div.g');
  }

  getFirstResultsUrl() {
    return this.getResults()
      .first()
      .$('cite.iUh30')
      .getText();
  }
}
