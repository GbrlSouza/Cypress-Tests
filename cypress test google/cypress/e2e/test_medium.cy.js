describe('Login Page - Medium Level Test', () => {
    it('should allow the user to log in with valid credentials', () => {
        cy.login('validUser', 'validPassword'); 
        cy.url().should('include', '/dashboard'); 
        cy.checkWelcomeMessage('validUser'); 
    });
});
