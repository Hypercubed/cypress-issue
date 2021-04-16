describe('timming issue', () => {
  before(() => {
    cy.visit('index.html');
  });

  it('test', () => {
    cy.get('button').click();
    cy.get('#msg').should('have.text', 'World');
  });
});