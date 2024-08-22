describe("User adds value in category settings and that value should be applied on all Entries", () => {

    beforeEach(() => {
      // Perform login and initial navigation
      cy.visit('https://manager.spadasoft.com/');
      cy.get('input[name="email"]').type('superadmin@gmail.com');
      cy.get('input[name="password"]').type('password{enter}');
      cy.wait(5000); // wait for login to complete
      cy.get('.MuiToolbar-root > .MuiIconButton-colorInherit').click();
      cy.get('#combo-box-demo').type('testing{downarrow}{enter}');
      cy.wait(4000); // wait for any post-login processing
    });
  
    it("Values should be added in Category Settings", () => {
      // Navigate to Category Settings
      cy.get('div[role="button"]').contains('Settings').click();
      cy.get('a[role="button"]').contains('Category Settings').click({ force: true });
      cy.wait(4000); // wait for the settings page to load
  
      // Add values to Category Settings
      cy.get('input[type="checkbox"]').eq(1).click({ force: true });
      cy.get('button[type="button"]').contains('Change Settings').click({ force: true });
      cy.get('select[name="currency"]').select('EUR').should('have.value', 'EUR');
      cy.get('input[name="registrationLimit"]').clear().type('100');
      cy.get('select[name="onlinePayments"]').select('Per Athlete');
      cy.get('select[name="method"]').select('Both');
      cy.get('input[name="fee"]').clear().type('90');
      cy.get('input[name="onsiteFee"]').clear().type('100');
      cy.get('input[name="mdEntries"]').clear().type('10');
      cy.get('input[name="mdWCEntries"]').clear().type('10');
      cy.get('input[name="mdSeeds"]').clear().type('10');
      cy.get('input[name="qEntries"]').clear().type('10');
      cy.get('input[name="qWCEntries"]').clear().type('10');
      cy.get('input[name="qSeeds"]').clear().type('10');
      cy.get('select[name="status"]').select('Open');
      cy.get('input[name="service"]').clear().type('50');
      cy.get('button[type="submit"]').contains('Save').click({ force: true });
    });
  
    it("In Entries, Action should be applied on all entries.", () => {
      // Navigate to Entries
      cy.get('div[role="button"]').contains('Entries').click({ force: true });
      cy.get('a[role="button"]').contains('Entries').click({ force: true });
      cy.wait(4000); // wait for the entries page to load
  
      // Apply action on all entries
      cy.get('button[type="button"]').contains('Actions').click({ force: true });
      cy.get('.MuiList-root > :nth-child(2) > .MuiButton-label').click({ force: true });
    });
  
  });
  




/*
First, log in. 
Then, go to the settings, navigate to category settings, and add a value in the first row of the table.
 After that, go to the entries section, click the action button for all entries under the entries tab,
  and select "update ranking and seeds apply." 
  */