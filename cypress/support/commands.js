Cypress.Commands.add('generateEmail', () => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const length = 10; // Specify the desired length of the username    
  let username = "";
  for (let i = 0; i < length; i++) {
    username += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  const domain = 'gmail.com';
  const generatedEmail = `${username}@${domain}`;
  return cy.wrap(generatedEmail); // Wrap the generated email in a Cypress chainable
});


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })