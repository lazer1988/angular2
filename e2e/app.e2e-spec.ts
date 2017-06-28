import { Angular2.LocPage } from './app.po';

describe('angular2.loc App', () => {
  let page: Angular2.LocPage;

  beforeEach(() => {
    page = new Angular2.LocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
