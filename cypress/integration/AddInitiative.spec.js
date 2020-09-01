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
    cy.get('input[id="app-name"]').type('Nazwa inicjatywy')
    cy.get('select[id="category"]').select('local_firms')
    cy.get('input[id="platform-website"]').check()
    cy.get('input[id="target-url"]').type('http://example-initiative.test/')
    cy.get('input[data-cy="add-resource-location-input"]').type('Warszawa{enter}')
    cy.get('div').contains('Warszawa').click()
    cy.get('textarea[id="description"]').type('Opis inicjatywy...')
    cy.get('button[type="submit"]').click()

    cy.url().should('eq', 'http://localhost:3000/dodaj-inicjatywe/sukces')
    cy.get('[data-cy="thanks-for-adding-resource"]').should('have.length', 1)
  })

  it('displays errors', () => {
    cy.get('input[id="app-name"]').type('a'.repeat(300))
    cy.get('button[type="submit"]').click()
    cy.get('p').contains('Maksymalna długość 250 znaków')
    cy.get('p').contains('Wprowadź opis inicjatywy')
    cy.url().should('eq', 'http://localhost:3000/dodaj-inicjatywe')
  })
})