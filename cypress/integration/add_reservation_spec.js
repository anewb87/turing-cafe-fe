describe('Full Form Functionality', () => {
    it('Should be able to add a new reservation to the page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('input')
            .eq(0)
            .type('Clementine')

        cy.get('input')
            .eq(1)
            .type('02/16')

        cy.get('input')
            .eq(2)
            .type('2:00')

        cy.get('input')
            .eq(3)
            .type(3)

        cy.get('button')
            .eq(0)
            .click()

        cy.get('.reservation-card')
            .should('have.length', 10)

        cy.get('.reservation-card')
            .eq(9)
            .should('contain', 'Clementine')
            .should('contain', '02/16')
            .should('contain', '2:00')
            .should('contain', 'Number of guests: 3')
    })
})

//Wondering if better practice NOT to have this as it's own file since I'm copying and pasting almost everything form form_spec.js into this test first before a button click and checking to make sure it works.