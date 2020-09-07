import { getByCyData } from '../support/selectorHelper'

describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('when search input there are all initiatives', () => {
    cy.get(getByCyData('resource-tile')).should('have.length', 2)
  })

  it('displays proper initiative when location selected', () => {
    cy.get('input[placeholder="Szukaj..."]').type('elder{enter}')

    cy.get(getByCyData('resource-tile')).should('have.length', 1)
    cy.get(getByCyData('resource-tile')).contains('Help for elder people')

    cy.get('input[placeholder="Szukaj..."]').clear().type('hospitals{enter}')

    cy.get(getByCyData('resource-tile')).should('have.length', 1)
    cy.get(getByCyData('resource-tile')).contains('Help for hospitals')
  })

  it('clears search input when click cross', () => {
    cy.get('input[placeholder="Szukaj..."]').type('elder{enter}')
    cy.get(getByCyData('resource-tile')).should('have.length', 1)
    cy.get(getByCyData('clear-search-input')).click()
    cy.get(getByCyData('resource-tile')).should('have.length', 2)
  })
})