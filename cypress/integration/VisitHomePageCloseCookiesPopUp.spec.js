describe('Home Page, Cookies PopUp', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the home page and closes cookies banner', () => {
    cy.get('[data-cy="cookies-banner"]').contains('korzysta z plików cookies')
    cy.get('[data-cy="cookies-banner-accept"]').click()
    cy.get('[data-cy="cookies-banner"]').should('not.exist')
  });
})