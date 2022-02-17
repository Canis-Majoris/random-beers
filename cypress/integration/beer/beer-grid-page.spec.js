describe('Beer grid page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('render loading indicator', () => {
    cy.get('.loading', { timeout: 1000 }).should('exist');
  });
  it('render BeerGrid Component', () => {
    cy.get('.beer-grid')
      .find('.beer-card', { timeout: 60000 })
      .should('have.length', 30);
  });
});
