import { StripeElementsPage } from './app.po';

describe('stripe-elements App', () => {
  let page: StripeElementsPage;

  beforeEach(() => {
    page = new StripeElementsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
