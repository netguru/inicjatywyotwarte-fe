import { getByCyData } from '../support/selectorHelper'

describe('Footer area', () => {
  beforeEach(() => {
    cy.visit('/');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('has privacy policy page link', () => {
    cy.get(`${getByCyData('footer-navigation-link')}[href="/polityka-prywatnosci"]`).click()
    cy.url().should('eq', 'http://localhost:3000/polityka-prywatnosci')
  })

  it('has rules page link', () => {
    cy.get(`${getByCyData('footer-navigation-link')}[href="/regulamin-strony"]`).click()
    cy.url().should('eq', 'http://localhost:3000/regulamin-strony')
  })

  it('has help page link', () => {
    cy.get(`${getByCyData('footer-navigation-link')}[href="/pomoc"]`).click()
    cy.url().should('eq', 'http://localhost:3000/pomoc')
  })

  it('has about us page link', () => {
    cy.get(`${getByCyData('footer-navigation-link')}[href="/o-nas"]`).click()
    cy.url().should('eq', 'http://localhost:3000/o-nas')
  })
})