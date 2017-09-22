import { ReactiveForm2Page } from './app.po';

describe('reactive-form2 App', () => {
  let page: ReactiveForm2Page;

  beforeEach(() => {
    page = new ReactiveForm2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
