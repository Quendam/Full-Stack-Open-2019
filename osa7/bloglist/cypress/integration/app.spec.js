import { oneOfType } from 'prop-types'

describe('Blogs app ', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user =   {
      'username': 'taavi',
      'password': 'asdf1234',
      'name': 'Taavi Testaaja'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Login to application')
  })

  describe('While logged in', function() {
    beforeEach(function(){
      cy.contains('Login to application')
        .click()
      cy.get('[data-cy=username]')
        .type('taavi')
      cy.get('[data-cy=password]')
        .type('asdf1234')
      cy.get('[data-cy=submit]')
        .click()
    })

    it('user can login', function () {
      cy.contains('logged in Taavi Testaaja')
    })

    it('Can create blog', function() {
      cy.contains('new blog')
        .click()
      cy.get('[data-cy=new-blog-title]')
        .type('Testi blogi 1')
      cy.get('[data-cy=new-blog-author]')
        .type('Testi author')
      cy.get('[data-cy=new-blog-url]')
        .type('http://testing.local/blog1')
      cy.get('[data-cy=new-blog-submit]')
        .click()
      cy.contains('Testi blogi 1')
    })

  // disabled this for now as we don't have any blogs to show.
  // it('Blogs are shown', function(){
  //   cy.contains('React patterns 2')
  //   cy.contains('Canonical string reduction')
  // })
  })
})