/// <reference types="Cypress"/>
class LoginPage{

    visit(){
        
        cy.visit('https://admin-demo.nopcommerce.com/login')

    }

    fillEmail(value){

        const field = cy.get('#Email').clear().type(value)
        return this

    }

    fillPassword(value){
        const field = cy.get('#Password').clear().type(value)
        return this
    }

    submit(){
        const button = cy.get('[type=submit]').click()
    }
}

export default LoginPage
