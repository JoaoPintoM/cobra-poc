import { CobraPage } from './app.po';

describe('cobra App', function() {
  let page: CobraPage;

  beforeEach(() => {
    page = new CobraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
