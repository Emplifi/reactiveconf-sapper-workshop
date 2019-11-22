describe('Sapper template app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Welcome');
  });

  it('navigates to /about', () => {
    cy.get('nav a')
      .contains('About')
      .click();
    cy.url().should('include', '/about');
  });

  it('navigates to /offer', () => {
    cy.get('nav a')
      .contains('Offer')
      .click();
    cy.url().should('include', '/offer');
  });
});
