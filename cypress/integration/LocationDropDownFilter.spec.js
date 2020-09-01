describe('Tag filtering', () => {
  beforeEach(() => {
    cy.visit('/');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('when no location selected all initiatives are displayed', () => {
    cy.get('[data-cy="resource-tile"]').should('have.length', 2)
  })

  it('displays proper initiative when location selected', () => {
    cy.get('button').contains('Lokalizacja').click()
    cy.get('li').contains('Warsaw').click()
    cy.get('[data-cy="resource-tile"]').should('have.length', 1)
    cy.get('[data-cy="resource-tile"]').contains('Warsaw')

    cy.get('button').contains('Warsaw').click()
    cy.get('li').contains('Poznan').click()
    cy.get('[data-cy="resource-tile"]').should('have.length', 1)
    cy.get('[data-cy="resource-tile"]').contains('Poznan')
  })

  it('clears selection when cross icon clicked', () => {
    cy.get('button').contains('Lokalizacja').click()
    cy.get('li').contains('Warsaw').click()
    cy.get('[data-cy="resource-tile"]').should('have.length', 1)
    cy.get('[data-cy="clear-location-filter"]').click()
    cy.get('[data-cy="resource-tile"]').should('have.length', 2)
  })
})