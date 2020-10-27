/// <reference types="Cypress"/>

import LoginPage from '../pageobjects/LoginPage'

describe('Test Suite',function(){

    it('Valid Login Test',function(){
        const logobj = new LoginPage()
        logobj.visit()
        logobj.fillEmail('admin@yourstore.com')
        logobj.fillPassword('admin')
        logobj.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })
})