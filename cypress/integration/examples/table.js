/// <reference types="Cypress" />

describe('Suite Name',function(){

    it('Table Test',function(){

        cy.visit('http://testautomationpractice.blogspot.com')
        
        // 1. Check value anywhere in a table
        cy.get('table[name=BookTable]').contains('td','Learn Java').should('be.visible')
        // Learn Selenium is in td tag
        //.contains take two param One is tag and other is what that tag should contain

        //2. Check value in specific row and column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        //3. Check value based on condition by iterating rows
        cy.get('table[name=BookTable] > tbody > tr > td:nth-child(2)').each(($e,index,$list) => {

            const author =$e.text()
            if(author.includes("Amod")){
                cy.get('table[name=BookTable] > tbody > tr > td:nth-child(1)').eq(index).then(function(bname)
                {
                    const bookName = bname.text()
                    expect(bookName).to.equals("Master In Java")
                })
            }
        })

    })
})