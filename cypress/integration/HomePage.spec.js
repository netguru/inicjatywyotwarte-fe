describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('click logo icon and gets redirected to main page', () => {
    cy.get('[data-cy="header-logo-icon"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('starts at suggested initiatives page', () => {
    cy.get('[data-cy="result-description"]').contains('Proponowane')
  })
})