### webook
This is a Cypress project for end-to-end testing.

## Prerequisites
Ensure you have the following installed on your machine:
Node.js 

## Installation

# 1. Clone the repository
git clone https://github.com/sitarrashafiq/webook.git
# 2. Intstall Dependencies
   npm install
   
## Running Tests
- To run tests in interactive mode, use npx cypress open, then select a browser and choose the test cases you want to run.
- To run tests in headless mode, use `npx cypress run`.

## Generating Email
A custom Cypress command (cy.generateEmail()) is used to generate a unique email address for the registration process. This command is defined in cypress/support/commands.js.

## Directory Structure

- `cypress/e2e` - Test specifications
- `cypress/support` - Custom commands and utility functions
