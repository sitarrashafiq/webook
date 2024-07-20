describe('Test Suite for Registration and filtering', () => {
  let email = null;

  it('Registration Process', () => {
    cy.visit('https://webook.com/en');
    cy.get('[role="presentation"]').contains('Log In / Sign Up').click();
    cy.get('[type="button"]').contains('Create an account').click();
    cy.get('[name="first_name"]').type('Sitara').should('have.value', 'Sitara');
    cy.get('[name="last_name"]').type('Shafiq').should('have.value', 'Shafiq');
    
    cy.generateEmail().then((generatedEmail) => {
      email = generatedEmail;
      cy.get('[name="email"]').type(email);
      cy.get('[name="confirm_email"]').type(email);
      cy.get('[name="password"]').type('C0mplexpass@');
      cy.get('[name="mobile"]').type('587262762');
      cy.get('[name="agreeTerms"]').check();
      cy.get('[type="submit"]').contains('Create Account').click();
    });
  });
  it('Search and filters',()=>{
    cy.visit('https://webook.com/en');
    cy.get('[inputmode="search"]').type('Events')
    cy.get('[class="flex items-center gap-2"]').first().click()
  })
});
