/// <reference types='cypress' />

describe('Check if user can create, search, update and delete', () => {
  const date = Date.now()
  const dateNow = date

  before(() => {
    cy.visit('/')
  })

  it('Check if user can create, search , update and delete', () => {
    // create
    cy.get('[data-cy=add-icon]').click()
    cy.get('[data-cy=add-modal]').should('be.visible')
    cy.get('[data-cy=add-name-input]').type(`test user ${dateNow}`)
    cy.get('[data-cy=add-email-input]').type('test@test.com')
    cy.get('[data-cy=add-title-input]').type('test title')
    cy.get('[data-cy=add-description-input]').type('test description')
    cy.get('[data-cy=add-save-button]').click()

    // search
    cy.get('[data-cy=search-box]').type(`test user ${dateNow}`)
    cy.wait(6000)

    // update
    cy.get('[data-cy=edit-icon]').click()
    cy.get('[data-cy=edit-modal]').should('be.visible')
    cy.get('[data-cy=edit-description-input]').type('add we add more description here')
    cy.get('[data-cy=edit-save-button]').click()
    cy.get('[data-cy=modal-overylay]').should('not.exist')
    cy.get('[data-cy=edit-modal]').should('not.exist')
    cy.contains('add we add more description here').should('be.visible')

    // delete
    cy.get('[data-cy=delete-icon]').click()
    cy.get('[data-cy=delete-modal]').should('be.visible')
    cy.get('[data-cy=delete-save-button]').click()
    cy.get('[data-cy=delete-modal]').should('not.exist')
    cy.get('[data-cy=no-data-title]')
      .contains('Sorry, We did not find any data', { matchCase: false })
      .should('be.visible')
    cy.wait(3000)
    cy.get('[data-cy=no-data-image]')
      .should('be.visible')
  })
})