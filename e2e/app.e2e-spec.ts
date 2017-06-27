import { NgMarvelComicsPage } from './app.po';

describe('ng-marvel-comics App', () => {
  let page: NgMarvelComicsPage;

  beforeEach(() => {
    page = new NgMarvelComicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
