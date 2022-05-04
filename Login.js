/// <reference types="Cypress" />
describe('Login Test case', () => {
    it('performs login operations for positive and negative test scenarios', () => {
      cy.visit('http://services.smartbear.com/samples/TestComplete14/smartstore/')
      cy.contains('Welcome to our store')
      cy.wait(1000)
      cy.get('#menubar-my-account > .dropdown > .menubar-link > span').click()

      // TCID_001 Test for invalid username and password
      cy.wait(1000)
      cy.get('#UsernameOrEmail').type('email@gmail.com')
      cy.get('#Password').type('check')
      cy.get(':nth-child(4) > .btn').click()
      cy.contains('The credentials provided are incorrect')

      //TCID_002 Test for valid username and password
      cy.get('#UsernameOrEmail').clear().type('email@gmail.com')
      cy.get('#Password').type('check')
      cy.get(':nth-child(4) > .btn').click()
      cy.contains('Welcome to our store')
      cy.get('#menubar-my-account > .dropdown > .menubar-link')

      //Additional test
      cy.get('.artlist-boxed > [data-id="2"] > .art-picture-block > .art-picture > img').click()
      cy.get('[data-id="12"] > .art-genericname > a > span').click()
      cy.get('.art-name > a > span').click()
      cy.get('.flex-grow-1 > .btn').click()
      cy.get('#item_EnteredQuantity').type(3)
    })
})