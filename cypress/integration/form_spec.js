describe('Form Values Functionality', () => {
    it('Should be able to fill out the form and see those values reflected in the form inputs', () => {
        cy.visit('http://localhost:3000/')

        cy.get('input')
            .eq(0)
            .type('Clementine')
            .should('have.value', 'Clementine')

        cy.get('input')
            .eq(1)
            .type('02/16')
            .should('have.value', '02/16')
        
        cy.get('input')
            .eq(2)
            .type('2:00')
            .should('have.value', '2:00')
        
        cy.get('input')
            .eq(3)
            .type(3)
            .should('have.value', '3')
    })
})