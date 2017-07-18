import { WebProjectPage } from './app.po';

describe('web-project App', () => {
  let page: WebProjectPage;

  beforeEach(() => {
    page = new WebProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
