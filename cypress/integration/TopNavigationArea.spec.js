describe('Top navigation area', () => {
  beforeEach(() => {
    cy.visit('/');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('has add initiative button', () => {
    cy.get('[data-cy="add-initative-button"]').click()
    cy.url().should('eq', 'http://localhost:3000/dodaj-inicjatywe')
  })

  it('has all initiatives navigation link', () => {
    cy.get('[data-cy="nav-link-item"][href="/"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('has neighbourly_help initiatives navigation link', () => {
    cy.get('[data-cy="nav-link-item"][href="/pomoc-sasiedzka"]').click()
    cy.url().should('eq', 'http://localhost:3000/pomoc-sasiedzka/zasoby/1')
  })

  it('has local_firms initiatives navigation link', () => {
    cy.get('[data-cy="nav-link-item"][href="/lokalne-firmy"]').click()
    cy.url().should('eq', 'http://localhost:3000/lokalne-firmy/zasoby/1')
  })

  it('has education initiatives navigation link', () => {
    cy.get('[data-cy="nav-link-item"][href="/edukacja"]').click()
    cy.url().should('eq', 'http://localhost:3000/edukacja/zasoby/1')
  })

  it('has for_hospitals initiatives navigation link', () => {
    cy.get('[data-cy="nav-link-item"][href="/dla-szpitali"]').click()
    cy.url().should('eq', 'http://localhost:3000/dla-szpitali/zasoby/1')
  })
})