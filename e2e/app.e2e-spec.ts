import { BrewFinderPage } from './app.po';

describe('brew-finder App', function() {
  let page: BrewFinderPage;

  beforeEach(() => {
    page = new BrewFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
