/// <reference types="Cypress"/>

describe('Suite Name',function(){

    it('Navigation Test',function(){

        cy.visit('https://www.google.com')
        cy.title().should('eq','Google')
        cy.get('input[name=q]').type('Cypress').type('{enter}')
        cy.title().should('eq','Cypress - Google Search')

        //Navigation
        cy.go('back')
        cy.title().should('eq','Google')
        cy.go('forward')
        cy.title().should('eq','Cypress - Google Search')
        // cy.go('back') is equivalent to cy.go(-1)
        // cy.go('forward') is equivalent to cy.go(1)

        cy.go(-1)
        cy.title().should('eq','Google')
        cy.go(1)
        cy.title().should('eq','Cypress - Google Search')

        cy.reload() // Reload the Page


    })
})