describe('Login Page - Low Level Test', () => {
    it('should load the login page', () => {
        cy.visit('/login'); 
        cy.url().should('include', '/login'); 
        cy.get('h1').should('contain', 'Login');
    });
});
