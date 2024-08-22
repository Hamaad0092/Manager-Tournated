
describe("Create new entries", () => {
    it("logs in and creates a new entry", () => {
        cy.visit('https://manager.spadasoft.com/')
        cy.get('input[name="email"]').type('superadmin@gmail.com')
        cy.get('input[name="password"]').type('password{enter}').wait(5000)
        cy.get('button[type="button"]').first().click({ force: true }).wait(3000)
        cy.get('#combo-box-demo').type('testing{downarrow}{enter}').wait(4000)
        cy.get('.MuiList-root > :nth-child(4)').click({ force: true })
        cy.get('[href="/dashboard/entries?tournament=177"] > .MuiListItemText-root').click({ force: true })
        cy.wait(5000).get('button[type="button"]').contains('Add New Entry').eq(0).click({ force: true })
        cy.wait(5000).contains('Select first player from licensed users').click({force:true})
        cy.wait(5000).contains('Select second player from licensed users').click({force:true})
        cy.get('[type="email"]').first().type('test@gmail.com{enter}')
        cy.get('[type="email"]').last().type('test@gmail.com{enter}')
        cy.get('button[type="submit"]').contains('Register').click({ force: true }).wait(5000)

       // ********************** Rank 1 ******************************//

       cy.get('[data-testid="EditIcon"]').eq(0).click({force:true})
       cy.get('input[type="number"]').last().clear().type('3')
       cy.contains('Save').click({force:true})
      //********************  SEED */
       cy.get('[data-testid="EditIcon"]').last().click({force:true})
       cy.get('input[type="number"]').last().clear().type('3')
       cy.contains('Save').click({force:true})

       cy.wait(2000);

// Find all buttons and click the first one that contains either 'Not Paid' or '100'
cy.get('button[type="button"]').each(($button) => {
  const buttonText = $button.text().trim();

  if (buttonText.includes('Not Paid') || buttonText.includes('100')) {
    // Click the first button that matches the criteria
    cy.wrap($button).click({ force: true });
    return false; // Exit the .each() loop after clicking
  }
});
       cy.get('input[name="entryFee"]').clear().type('100')
       cy.get('[id="mui-component-select-type"]').click()
       cy.get('li[data-value="Cash"]').click({force:true})
       cy.wait(2000);

// Find all submit buttons and click the first one that contains 'Save' or 'Update'
cy.get('button[type="submit"]').then(($buttons) => {
  // Iterate over the buttons
  $buttons.each((index, button) => {
    const buttonText = Cypress.$(button).text().trim();

    if (buttonText.includes('Save') || buttonText.includes('Update')) {
      // Click the first button that matches the criteria
      cy.wrap(button).click({ force: true });
      return false; // Exit the .each() loop after clicking
    }
  });
});

// Focus on an element and press Escape twice
cy.wait(2000); // Ensure the page has loaded
cy.focused().type('{esc}{esc}');

cy.focused().type('{esc}{esc}');
cy.get('input[type="checkbox"]').last().click()
cy.get('.MuiButton-label > .MuiTypography-root').eq(0).click({force:true})
cy.get('button[type="button"]').last().click({force:true})
    })
})

