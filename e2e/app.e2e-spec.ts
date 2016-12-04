import { Project03Page } from './app.po';

describe('project03 App', function() {
  let page: Project03Page;

  beforeEach(() => {
    page = new Project03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
