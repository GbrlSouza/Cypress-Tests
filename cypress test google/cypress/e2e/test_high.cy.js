describe('Login Page - High Level Test', () => {
    it('should display an error message for invalid credentials', () => {
        cy.login('invalidUser', 'invalidPassword'); 
        cy.checkErrorMessage('Invalid username or password'); 
    });

    it('should log in successfully with valid credentials and log out', () => {
        cy.login('validUser', 'validPassword'); 
        cy.url().should('include', '/dashboard'); 
        cy.logout(); 
        cy.url().should('include', '/login'); 
    });
});
