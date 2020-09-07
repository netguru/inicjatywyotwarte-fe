import { getByCyData } from '../support/selectorHelper'

describe('Search', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/undefined/resources',
      response: {
        data: {
          id: 1,
          type: 'resources',
          attributes: {
            name: 'testName'
          }
        }
      }
    })


    cy.visit('/dodaj-inicjatywe');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('sends new request properly', () => {
    cy.get(getByCyData('add-resource-app-name')).type('Nazwa inicjatywy')
    cy.get(getByCyData('add-resource-category')).within(() => {
      cy.get('select').select('local_firms')
    })
    cy.get(getByCyData('add-resource-platform-ios')).within(() => {
      cy.get('input').first().check()
    })
    cy.get(getByCyData('add-resource-target-url')).type('http://example-initiative.test/')
    cy.get(getByCyData('add-resource-location')).type('Warszawa{enter}')
    cy.get('div').contains('Warszawa').click()
    cy.get(getByCyData('add-resource-description')).type('Opis inicjatywy...')
    cy.get('button[type="submit"]').click()

    cy.url().should('eq', 'http://localhost:3000/dodaj-inicjatywe/sukces')
    cy.get(getByCyData('thanks-for-adding-resource')).should('have.length', 1)
  })

  it('displays errors', () => {
    cy.get(getByCyData('add-resource-app-name')).type('a'.repeat(300))
    cy.get('button[type="submit"]').click()
    cy.get('p').contains('Maksymalna długość 250 znaków')
    cy.get('p').contains('Wprowadź opis inicjatywy')
    cy.url().should('eq', 'http://localhost:3000/dodaj-inicjatywe')
  })
})