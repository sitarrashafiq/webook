const {homePageObj} = require("../support/PageObjectModel/homePage")
const {registrationPageObj} = require("../support/PageObjectModel/registrationPage")
const {searchPageObj} = require("../support/PageObjectModel/searchPage")
describe('Test Suite for Registration and Filtering', () => {

  let email = null;

  it('Registration Process', () => {
    homePageObj.visit();
    homePageObj.clickLoginOrSignUp();
    registrationPageObj.clickCreateAccount();
    registrationPageObj.fillFirstName('Sitara');
    registrationPageObj.fillLastName('Shafiq');

    cy.generateEmail().then((generatedEmail) => {
      email = generatedEmail;
      registrationPageObj.fillEmail(email);
      registrationPageObj.fillPassword('C0mplexpass@');
      registrationPageObj.fillMobile('587262762');
      registrationPageObj.agreeToTerms();
      registrationPageObj.submit();
    });
  });

  it('Search and filters', () => {
    homePageObj.visit();
    searchPageObj.searchFor('Events');
    searchPageObj.selectFirstSearchResult();
  });
});
