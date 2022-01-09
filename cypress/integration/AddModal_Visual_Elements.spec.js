/// <reference types='cypress' />

describe('Check if all visual elements in Add Modal show correctly', () => {

  before(() => {
    cy.visit('/')
  })

  it('Check if Add Modal show up (with overlay) when click on AddIcon', () => {
    cy.get('[data-cy=add-icon]').click()
    cy.get('[data-cy=modal-overylay]').should('be.visible')
    cy.get('[data-cy=add-modal]').should('be.visible')
  })


  it('Check if Add Modal title show correctly', () => {
    cy.get('[data-cy=add-modal-title]').contains('New Post', { matchCase: false }).should('be.visible')
  })

  it('Check if Avatr show correctly', () => {
    cy.get('[data-cy=card-avatar]').should('be.visible')
  })

  it('Check if Name Field show correctly', () => {
    cy.get('[data-cy=add-name-input]')
      .and('be.visible')
      .and('not.have.attr', 'value')
  })

  it('Check if Email Field show correctly', () => {
    cy.get('[data-cy=add-email-input]')
      .and('be.visible')
      .and('not.have.attr', 'value')
  })

  it('Check if Title Field show correctly', () => {
    cy.get('[data-cy=add-title-input]')
      .and('be.visible')
      .and('not.have.attr', 'value')
  })

  it('Check if Description Field show correctly', () => {
    cy.get('[data-cy=add-description-input]')
      .and('be.visible')
      .and('not.have.attr', 'value')
  })
  

  it('Check if Save Button show correctly', () => {
    cy.get('[data-cy=add-save-button]')
      .contains('Save', { matchCase: false })
      .should('be.visible')
  })

  it('Check if Cancel Button show/function correctly', () => {
    cy.get('[data-cy=add-cancel-button]').contains('Cancel', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=add-cancel-button]').click()
    cy.get('[data-cy=modal-overylay]').should('not.exist')
    cy.get('[data-cy=add-modal]').should('not.exist')
  })

})
