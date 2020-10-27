/// <reference types="Cypress"/>

describe('Suite Name',function(){


    before(function(){
        cy.log('***** This is Setup Block *****')
    })

    after(function(){
        cy.log('***** This is Tear Down Block *****')
    })

    beforeEach(function(){
        cy.log('***** This is a Login Test block *****')
    })

    afterEach(function(){
        cy.log('***** This is Logout Test Block *****')
    })

    it('search',function(){

        cy.log('***** This is searching test *****')
    })

    it('advance search',function(){

        cy.log('***** This is advance searching test *****')
    })

    it('listing products',function(){

        cy.log('***** This is listing products test *****')
    })
})