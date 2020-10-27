/// <reference types="Cypress"/>

describe('Suite Name',function(){

    before(function(){
        cy.fixture('example').then(function(data){

            this.data = data
        })
        
    })

    it('fixtures test',function(){

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').clear().type(this.data.username)
        cy.get('#Password').clear().type(this.data.password)
        cy.get('.button-1.login-button').click()
    })
})