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

    describe('Blog handling', function(){
      beforeEach(function(){
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
      })

      it('Can create blog', function() {
        cy.contains('Testi blogi 1')
      })

      it('Can like blog', function() {
        cy.contains('Read more')
          .click()
        cy.contains('Testi blogi 1 Testi author')
        cy.contains('Like')
          .click()
        cy.contains('1 likes')
      })

      it('Can add comment', function() {
        cy.contains('Read more')
          .click()
        cy.contains('Testi blogi 1 Testi author')

        cy.get('[data-cy=blog-comment-entry]')
          .type('Comment testing')
        cy.get('[data-cy=blog-comment-add]')
          .click()

        cy.contains('Comment testing')
      })

      it('User blog entries are listed', function(){
        cy.contains('Testi blogi 1')

        cy.contains('Users')
          .click()
        cy.contains('blogs created')

        cy.get('[data-cy=user-blog-count]')
          .contains('1')
      })
    })

    it('can logout', function(){
      cy.get('[data-cy=logout-btn]')
        .click()
      cy.contains('Login to application')
    })
  })
})