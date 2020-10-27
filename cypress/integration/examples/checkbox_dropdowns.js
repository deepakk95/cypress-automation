/// <reference types="Cypress"/>

describe('Suite Name', function(){

    it('Check box Test',function(){
        cy.visit('https://artoftesting.com/samplesiteforselenium')

        //Handle Checkboxes
        cy.get('.Automation').check().should('be.checked').and('have.value','Automation')
        cy.get('.Performance').check().should('be.checked').and('have.value','Performance')

        cy.get('.Automation').uncheck().should('not.be.checked')
        cy.get('.Performance').uncheck().should('not.be.checked')
    
        cy.get('[type=checkbox]').check(['Performance'])


    })

    it('Static Dropdown Test',function(){
        cy.visit('https://artoftesting.com/samplesiteforselenium')

        //Handle Dropdowns
        cy.get('#testingDropdown').select('Performance').should('have.value','Performance')
        
    })

    it('Multi-Select Dropdown Test',function(){
        cy.visit('https://www.seleniumeasy.com/test/jquery-dropdown-search-demo.html')

        //Handle Dropdowns
        cy.get('.select2-search__field').click()
        cy.get('.select2-results__option').contains('California').click()
        cy.get('.select2-search__field').click()
        cy.get('.select2-results__option').contains('Alaska').click()
                
    })

    it('Searchable Dropdown Test',function(){
        cy.visit('https://www.seleniumeasy.com/test/jquery-dropdown-search-demo.html')

        //Handle Dropdowns
        cy.get('span[title=\'American Samoa\'][class=\'select2-selection__rendered\']').click()
        cy.get('.select2-search.select2-search--dropdown > .select2-search__field').type('Mariana')
        cy.get('.select2-search.select2-search--dropdown > .select2-search__field').type('{enter}')
                
    })
})