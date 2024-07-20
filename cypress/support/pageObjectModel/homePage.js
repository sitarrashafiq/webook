export class homePage {
    visit() {
      cy.visit('https://webook.com/en');
    }
  
    clickLoginOrSignUp() {
      cy.get('[role="presentation"]').contains('Log In / Sign Up').click();
    }
  }
  
  export const homePageObj = new homePage() 
  