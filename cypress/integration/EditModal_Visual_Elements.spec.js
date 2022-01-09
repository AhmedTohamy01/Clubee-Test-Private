/// <reference types='cypress' />

describe('Check if all visual elements in Edit Modal show correctly', () => {

  before(() => {
    cy.visit('/')
  })

  it('Check if Edit Modal show up (with overlay) when click on AddIcon', () => {
    cy.get('[data-cy=edit-icon]').first().click()
    cy.get('[data-cy=modal-overylay]').should('be.visible')
    cy.get('[data-cy=edit-modal]').should('be.visible')
  })


  it('Check if Edit Modal title show correctly', () => {
    cy.get('[data-cy=edit-modal-title]').contains('Edit Post', { matchCase: false }).should('be.visible')
  })

  it('Check if Avatr show correctly', () => {
    cy.get('[data-cy=card-avatar]').should('be.visible')
  })

  it('Check if Name Field show correctly', () => {
    cy.get('[data-cy=edit-name-input]')
      .should('be.visible')
  })

  it('Check if Email Field show correctly', () => {
    cy.get('[data-cy=edit-email-input]')
      .should('be.visible')
  })

  it('Check if Title Field show correctly', () => {
    cy.get('[data-cy=edit-title-input]')
      .should('be.visible')
  })

  it('Check if Description Field show correctly', () => {
    cy.get('[data-cy=edit-description-input]')
      .and('be.visible')
  })


  it('Check if Save Button show correctly', () => {
    cy.get('[data-cy=edit-save-button]')
      .contains('Save', { matchCase: false })
      .should('be.visible')
  })

  it('Check if Cancel Button show/function correctly', () => {
    cy.get('[data-cy=edit-cancel-button]').contains('Cancel', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=edit-cancel-button]').click()
    cy.get('[data-cy=modal-overylay]').should('not.exist')
    cy.get('[data-cy=edit-modal]').should('not.exist')
  })

})
