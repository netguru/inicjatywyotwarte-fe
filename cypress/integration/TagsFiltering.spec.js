import { getByCyData } from '../support/selectorHelper'

describe('Tag filtering', () => {
  beforeEach(() => {
    cy.visit('/');
    window.localStorage.setItem('areCookiesAccepted', 'true')
  });

  it('tags area is not visible initially', () => {
    cy.get(getByCyData('tags-container')).not('be.visible')
  })

  it('expands tags area', () => {
    cy.contains('Filtry').click()
    cy.get(getByCyData('tags-container')).should('be.visible')
  })

  it('displays proper tags', () => {
    cy.contains('Filtry').click()
    cy.get(getByCyData('tag-item')).contains('elder people').should('be.visible')
    cy.get(getByCyData('tag-item')).contains('hospitals').should('be.visible')
  })

  it('displays all initiatives when no tag selected', () => {
    cy.get(getByCyData('resource-tile')).should('have.length', 2)
  })

  it('displays proper initiatives when tag selected', () => {
    cy.contains('Filtry').click()
    cy.get(getByCyData('tag-item')).contains('elder people').click()
    cy.get(getByCyData('resource-tile')).should('have.length', 1)
    cy.get(getByCyData('resource-tile')).contains('Help for elder people')
  })

  it('tag deselecting works', () => {
    cy.contains('Filtry').click()
    cy.get(getByCyData('tag-item')).contains('elder people').click()
    cy.get(getByCyData('resource-tile')).should('have.length', 1)

    cy.get(getByCyData('tag-item')).contains('elder people').click()
    cy.get(getByCyData('resource-tile')).should('have.length', 2)
  })

  it('displays no results page when there is no resource with tags combination', () => {
    cy.contains('Filtry').click()
    cy.get(getByCyData('tag-item')).contains('elder people').click()
    cy.get(getByCyData('tag-item')).contains('hospitals').click()
    cy.get(getByCyData('resource-tile')).should('have.length', 0)
    cy.get(getByCyData('no-initiatives-found')).should('have.length', 1)
  })
})