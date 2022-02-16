describe('Landing Page', () => {
    it('Should be able to visit the page and render the correct reservation elements', () => {
        cy.visit('http://localhost:3000/')
        cy.get('h1')
            .should('have.text', 'Turing Cafe Reservations')
    })
})