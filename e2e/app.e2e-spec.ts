import { KutchCodesPage } from './app.po';

describe('kutch-codes App', () => {
  let page: KutchCodesPage;

  beforeEach(() => {
    page = new KutchCodesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
