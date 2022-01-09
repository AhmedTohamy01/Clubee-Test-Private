/// <reference types='cypress' />

describe('Check if All visual elements in MainPage show correctly', () => {

  before(() => {
    cy.visit('/')
  })

  it('Check if MainPage title show correctly', () => {
    cy.get('[data-cy=main-title]').contains('News list', { matchCase: false }).should('be.visible')
  })

  it('Check if AddIcon show correctly', () => {
    cy.get('[data-cy=add-icon]').should('be.visible')
  })

  it('Check if SearchBox show correctly', () => {
    cy.get('[data-cy=search-box]')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Search by author ...')
  })

  it('Check if Card show correctly', async () => {
    cy.get('[data-cy=card-item]').should('be.visible')
    cy.get('[data-cy=edit-icon]').should('be.visible')
    cy.get('[data-cy=delete-icon]').should('be.visible')
    cy.get('[data-cy=card-avatar]').should('be.visible')
    cy.get('[data-cy=card-name]').should('be.visible')
    cy.get('[data-cy=card-email]').should('be.visible')
    cy.get('[data-cy=card-date]').should('be.visible')
    cy.get('[data-cy=card-title]').should('be.visible')
    cy.get('[data-cy=card-desc]').should('be.visible')
  })

})
