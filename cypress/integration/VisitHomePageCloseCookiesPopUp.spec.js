import { getByCyData } from '../support/selectorHelper'

describe('Home Page, Cookies PopUp', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the home page and closes cookies banner', () => {
    cy.get(getByCyData('cookies-banner')).contains('korzysta z plików cookies')
    cy.get(getByCyData('cookies-banner-accept')).click()
    cy.get(getByCyData('cookies-banner')).should('not.exist')
  });
})