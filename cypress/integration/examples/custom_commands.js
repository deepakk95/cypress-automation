/// <reference types="Cypress"/>

describe('Suite Name',function(){

    it('Login Test',function(){

        cy.login('admin@yourstore.com','admin') //Valid
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com','admin12') //Invalid data
        cy.title().should('be.equal','Your store. Login') //Same Page
    })

    it('Add Customer Test',function(){

        cy.login('admin@yourstore.com','admin')
        cy.title().should('eq','Dashboard / nopCommerce administration')

        // Script for Adding New Customer
        cy.log('Adding Customer.....')
    })

    it('Edit Customer Test',function(){

        cy.login('admin@yourstore.com','admin')
        cy.title().should('eq','Dashboard / nopCommerce administration')
        //Script for Editing Customer
        cy.log('Editing Customer.....')
    })
})