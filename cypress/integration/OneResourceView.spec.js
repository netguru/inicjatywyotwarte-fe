import { getByCyData } from '../support/selectorHelper'

describe('One resource page', () => {
  beforeEach(() => {
    cy.visit('/');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('clicks on tile and gets redirected to single resource view', () => {
    cy.get(getByCyData('resource-tile')).contains('Help for elder people').click()
    cy.url().should('eq', 'http://localhost:3000/zasob/1')
    cy.get(getByCyData('one-resource-page-header')).contains('Help for elder people')
  })

  it('is able to get back to initiatives list by back arrow', () => {
    window.localStorage.setItem('areCookiesAccepted', 'true')
    cy.visit('/zasob/1');
    cy.get(getByCyData('one-resource-page-go-back-button')).click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})