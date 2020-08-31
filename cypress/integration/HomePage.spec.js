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

  describe('Top navigation area', () => {
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

  describe('Footer area', () => {
    it('has privacy policy page link', () => {
      cy.get('[data-cy="footer-navigation-link"][href="/polityka-prywatnosci"]').click()
      cy.url().should('eq', 'http://localhost:3000/polityka-prywatnosci')
    })

    it('has rules page link', () => {
      cy.get('[data-cy="footer-navigation-link"][href="/regulamin-strony"]').click()
      cy.url().should('eq', 'http://localhost:3000/regulamin-strony')
    })

    it('has help page link', () => {
      cy.get('[data-cy="footer-navigation-link"][href="/pomoc"]').click()
      cy.url().should('eq', 'http://localhost:3000/pomoc')
    })

    it('has about us page link', () => {
      cy.get('[data-cy="footer-navigation-link"][href="/o-nas"]').click()
      cy.url().should('eq', 'http://localhost:3000/o-nas')
    })
  })
})