describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('when search input there are all initiatives', () => {
    cy.get('[data-cy="resource-tile"]').should('have.length', 2)
  })

  it('displays proper initiative when location selected', () => {
    cy.get('input[placeholder="Szukaj..."]').type('elder{enter}')

    cy.get('[data-cy="resource-tile"]').should('have.length', 1)
    cy.get('[data-cy="resource-tile"]').contains('Help for elder people')

    cy.get('input[placeholder="Szukaj..."]').clear().type('hospitals{enter}')

    cy.get('[data-cy="resource-tile"]').should('have.length', 1)
    cy.get('[data-cy="resource-tile"]').contains('Help for hospitals')
  })

  it('clears search input when click cross', () => {
    cy.get('input[placeholder="Szukaj..."]').type('elder{enter}')
    cy.get('[data-cy="resource-tile"]').should('have.length', 1)
    cy.get('[data-cy="clear-search-input"]').click()
    cy.get('[data-cy="resource-tile"]').should('have.length', 2)
  })
})