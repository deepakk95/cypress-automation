describe('Test Suite', function(){
    
    it('Verify Title - Positive Test', function(){
        cy.visit('https://wix.com/')
        cy.title().should('eq','Free Website Builder | Create a Free Website | Wix.com')
        
    }) 

    // it('Verify Title - Negative Test', function(){
    //     cy.visit('https://nopcommerce.com/')
    //     cy.title().should('eq','google')
        
    // }) 
})