describe('authentication', () => {
  it('should allow existing users to login', () => {
    cy.visit('/');
    cy.get('button').click();
  });
});
