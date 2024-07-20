export class searchPage {
  searchFor(term) {
    cy.get('[inputmode="search"]').type(term);
  }

  selectFirstSearchResult() {
    cy.get('[class="flex items-center gap-2"]').first().click();
  }
}
export const searchPageObj = new searchPage() 
