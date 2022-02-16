describe('Landing Page', () => {
    it('Should be able to visit the page and render the correct elements', () => {
        cy.visit('http://localhost:3000/')

        cy.get('h1')
            .should('have.text', 'Turing Cafe Reservations')

        cy.get('form')
            .should('exist')

        cy.get('input')
            .eq(0)
            .invoke('attr', 'placeholder')
            .should('contain', 'Name')
        
        cy.get('input')
            .eq(1)
            .invoke('attr', 'placeholder')
            .should('contain', 'Date (mm/dd)')
       
        cy.get('input')
            .eq(2)
            .invoke('attr', 'placeholder')
            .should('contain', 'Time')

        cy.get('input')
            .eq(3)
            .invoke('attr', 'placeholder')
            .should('contain', 'Number of guests')

        cy.get('button')
            .eq(0)
            .should('contain', 'Make Reservation')

        cy.get('.resy-container')
            .should('exist')

        cy.get('.reservation-card')
            .should('have.length', 9)

        cy.get('.reservation-card')
            .first()
            
    })

})