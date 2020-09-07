import { getByCyData } from '../support/selectorHelper'

describe('Category filtering', () => {
  beforeEach(() => {
    cy.visit('/');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('displays all initiatives when no category selected', () => {
    cy.get(getByCyData('resource-tile')).should('have.length', 2)
  })

  it('filters properly and displays neighbourly_help category', () => {
    cy.get(`${getByCyData('nav-link-item')}[href="/pomoc-sasiedzka"]`).click()
    cy.get(getByCyData('resource-tile')).should('have.length', 1)
    cy.get(getByCyData('resource-tile')).contains('Help for elder people')
  })

  it('filters properly and displays local_firms category', () => {
    cy.get(`${getByCyData('nav-link-item')}[href="/lokalne-firmy"]`).click()
    cy.get(getByCyData('resource-tile')).should('have.length', 0)
    cy.get(getByCyData('no-initiatives-found')).should('have.length', 1)
  })

  it('filters properly and displays education category', () => {
    cy.get(`${getByCyData('nav-link-item')}[href="/edukacja"]`).click()
    cy.get(getByCyData('resource-tile')).should('have.length', 0)
    cy.get(getByCyData('no-initiatives-found')).should('have.length', 1)
  })

  it('filters properly and displays for_hospitals category', () => {
    cy.get(`${getByCyData('nav-link-item')}[href="/dla-szpitali"]`).click()
    cy.get(getByCyData('resource-tile')).should('have.length', 1)
    cy.get(getByCyData('resource-tile')).contains('Help for hospitals')
  })
})