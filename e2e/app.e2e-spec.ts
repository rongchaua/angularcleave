import { AngularcleavePage } from './app.po';

describe('angularcleave App', function() {
  let page: AngularcleavePage;

  beforeEach(() => {
    page = new AngularcleavePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
