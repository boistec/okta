import { OktatestPage } from './app.po';

describe('oktatest App', () => {
  let page: OktatestPage;

  beforeEach(() => {
    page = new OktatestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
