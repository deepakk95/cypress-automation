/// <reference types="Cypress"/>

describe('Suite Name',function(){

    it('Alerts Test 1',function(){

        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get('.btn.btn-danger').click()   // Cypress closes alert window by default
        //We have to use cypress events to capture message from Alert box
        //We have to use event window:alert ( When we have only the option to accept the alert)
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('I am an alert box!')
        }) 
    })

    it('Alerts Test 2',function(){

        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get('a[href=\'#CancelTab\']').click()
        cy.get('.btn.btn-primary').click()   // Cypress closes alert window by default
        //We have to use cypress events to capture message from Alert box
        //We have to use event window:confirm ( Only where we have cancel as well as confirm/ok button)
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Press a Button !')
        }) 
    })
})