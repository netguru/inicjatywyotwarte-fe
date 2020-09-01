describe('Tag filtering', () => {
  beforeEach(() => {
    cy.visit('/');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('tags area is not visible initially', () => {
    cy.get('[data-cy="tags-container"]').not('be.visible')
  })

  it('expands tags area', () => {
    cy.contains('Filtry').click()
    cy.get('[data-cy="tags-container"]').should('be.visible')
  })

  it('displays proper tags', () => {
    cy.contains('Filtry').click()
    cy.get('[data-cy="tag-item"]').contains('elder people').should('be.visible')
    cy.get('[data-cy="tag-item"]').contains('hospitals').should('be.visible')
  })

  it('displays all initiatives when no tag selected', () => {
    cy.get('[data-cy="resource-tile"]').should('have.length', 2)
  })

  it('displays proper initiatives when tag selected', () => {
    cy.contains('Filtry').click()
    cy.get('[data-cy="tag-item"]').contains('elder people').click()
    cy.get('[data-cy="resource-tile"]').should('have.length', 1)
    cy.get('[data-cy="resource-tile"]').contains('Help for elder people')
  })

  it('tag deselecting works', () => {
    cy.contains('Filtry').click()
    cy.get('[data-cy="tag-item"]').contains('elder people').click()
    cy.get('[data-cy="resource-tile"]').should('have.length', 1)

    cy.get('[data-cy="tag-item"]').contains('elder people').click()
    cy.get('[data-cy="resource-tile"]').should('have.length', 2)
  })

  it('displays no results page when there is no resource with tags combination', () => {
    cy.contains('Filtry').click()
    cy.get('[data-cy="tag-item"]').contains('elder people').click()
    cy.get('[data-cy="tag-item"]').contains('hospitals').click()
    cy.get('[data-cy="resource-tile"]').should('have.length', 0)
    cy.get('[data-cy="no-initiatives-found"]').should('have.length', 1)
  })
})