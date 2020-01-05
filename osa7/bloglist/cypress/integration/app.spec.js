import { oneOfType } from "prop-types"

describe('Blogs app ', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Login to application')
  })

  it('user can login', function () {
    cy.contains('Login to application')
      .click()
    cy.get('[data-cy=username]')
      .type('taavi')
    cy.get('[data-cy=password]')
      .type('asdf1234')
    cy.get('[data-cy=submit]')
      .click()
    cy.contains('logged in Taavi Testaaja')
  })

  it('Blogs are shown', function(){
    cy.contains('React patterns 2')
    cy.contains('Canonical string reduction')
  })

})