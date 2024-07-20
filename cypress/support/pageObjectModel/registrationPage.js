export class registrationPage {
  clickCreateAccount() {
    cy.get('[type="button"]').contains('Create an account').click();
  }

  fillFirstName(firstName) {
    cy.get('[name="first_name"]').type(firstName);
  }

  fillLastName(lastName) {
    cy.get('[name="last_name"]').type(lastName);
  }

  fillEmail(email) {
    cy.get('[name="email"]').type(email);
    cy.get('[name="confirm_email"]').type(email);
  }

  fillPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  fillMobile(mobile) {
    cy.get('[name="mobile"]').type(mobile);
  }

  agreeToTerms() {
    cy.get('[name="agreeTerms"]').check();
  }

  submit() {
    cy.get('[type="submit"]').contains('Create Account').click();
  }
}

export const registrationPageObj = new registrationPage() 
