import { browser, by, element } from 'protractor';

export class KutchCodesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ak-root h1')).getText();
  }
}
