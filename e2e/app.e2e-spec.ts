import { ElectivaIITaller4Page } from './app.po';

describe('electiva-iitaller4 App', function() {
  let page: ElectivaIITaller4Page;

  beforeEach(() => {
    page = new ElectivaIITaller4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
