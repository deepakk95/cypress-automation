/// <reference types="cypress" />
describe('Test Suite',function(){

    it('Verify types of locators',function(){
        cy.visit('https://www.flipkart.in/') // Opens URL
         cy.get('.LM6RPg').type('Apple Airpods 2') // Search box
         cy.wait(150)
         cy.get('.vh79eN').click() // Clicks Search
         

    })
})