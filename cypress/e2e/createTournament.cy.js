require('cypress-xpath');
import 'cypress-file-upload';
let count = 1 //******** Give tournament number ******/
const name=`Testing tournament ${count}` 
describe('Manager Panel', () => {

  it('Login & create new Tournament successfully', () => {

    cy.visit('https://manager.spadasoft.com/dashboard/all-tournaments')
    cy.get('input[name="email"]').type('superadmin@gmail.com')
    cy.get('input[name="password"]').type('password')
    cy.get('button[type="submit"]').click()
    cy.wait(5000) 
    cy.get('[data-testid="AddCircleOutlineIcon"]').click({force:true})
    cy.wait(2000)
    cy.get('input[name="league"]').wait(5000).click().get('li[role="option"]').first().click({force:true})
    

//****************** The upper function is for always pick the third option of the dropdown*********/

cy.wait(3000)
cy.get('input[id=draw]').get('input[type=checkbox]').click()

cy.get('select[name="paymentMethod"]').then($dropdown => {
  const thirdOptionValue = $dropdown.find('option').eq(3).val();
  cy.wrap($dropdown).select(thirdOptionValue);
});

cy.get('select[name="paymentType"]').then($dropdown => {
  const thirdOptionValue = $dropdown.find('option').eq(1).val();
  cy.wrap($dropdown).select(thirdOptionValue);
});

cy.get('select[name="currency"]').then($dropdown => {
  const thirdOptionValue = $dropdown.find('option').eq(1).val();
  cy.wrap($dropdown).select(thirdOptionValue);
});

cy.get('input[name=entryFee]').clear().type('100')
cy.wait(2000)
cy.get('input[name=onsiteEntryFee]').clear().type('50')
cy.wait(2000)
// cy.get('input[name=noOfCourts]').clear().type('1')

cy.contains('Go to Next').click()

//*******************************************************************************************/
// *************************** first page is saved now next Dates & Location page***********//

cy.get('input[name="timeZone"]')
  .clear()
  .type('Europe/Athens')
  .wait(2000) 
  .type('{downarrow}') 
  .type('{enter}'); 

  cy.get('input[name=registrationStartDate]').clear().type("2024-08-19T00:30").wait(2000)
  cy.get('input[name=startDate]').clear().type("2024-08-23T00:30").wait(2000)
  // cy.get('input[name=endDate]').clear().type("2024-08-29T00:30").wait(2000)
  // cy.get('input[name=entryDeadline]').clear().type("2024-08-21T00:30").wait(2000)
  // cy.get('input[name=withdrawlDeadline]').clear().type("2024-08-22T00:30").wait(2000)
 cy.get('input[id="club-search"]').click().wait(2000).type('{downarrow}{enter}')
  cy.get('input[name=country]')
  .clear().type('Pakistan')
  .type('{downarrow}').
  type('{enter}')

  cy.get('input[name=city]')
  .clear()
  .type('Lahore')
  .click()

  cy.get('input[name=address]')
  .clear()
  .type('xyz lorem ispsum')

  cy.contains('Go to Next')
  .click()

//****Appearance | */

const Logo='download.jpg';
cy.get('input[type="file"]').eq(0).attachFile(Logo);
cy.get('input[name="title"]').type(name)
cy.get('.ql-editor').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit,')
 

cy.get('input[name="videoUrl"]').type('https://www.youtube.com')
cy.get('input[name="contactUrl"]').type('https:www.gmail.com')

cy.get('input[type="file"]').eq(1).attachFile(Logo);
cy.get('input[type="file"]').eq(2).attachFile(Logo);

const docPath = 'Test.pdf'; 
cy.contains('Select File').click({ force: true });
cy.get('input[type="file"]', { timeout: 10000 }).eq(3).attachFile(docPath);

cy.contains('Go to Next').click()

//******Tournament Registeration */

cy.contains('Add New Question').click()
cy.get('input[name="question"]').type("this is testing text......")
cy.get('select[name="fieldType"]').then($dropdown => {
  const thirdOptionValue = $dropdown.find('option').eq(2).val();
  cy.wrap($dropdown).select(thirdOptionValue);})

  cy.contains('Submit').last().click()
  cy.get('.ql-editor').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit,")
  cy.get('input[name="registerLink"]').type("https://www.google.com")

  cy.contains("Go to Next").click()

                                  //*************Extras *********/

   cy.get('input[name="isFeatured"]').click()
   cy.get('input[name="partnerSearch"]').click()

   cy.contains("Go to Next").click()

                            //********Management*********/
cy.get('input[name="organizer"]').click().wait(2000).type('{downarrow}{enter}');
cy.get('input[name="referee"]').click().wait(2000).type('{downarrow}{enter}');
cy.get('input[id="additionalReferee"]').click().wait(2000).type('{downarrow}{enter}');
cy.get('select[name="status"]').wait(2000).select(1)
cy.get('button[type="submit"]').last().click({force:true})

//************Fact Sheet */
cy.get('input[name="41"]').type('12')
cy.get('input[name="138"]').type('12')
// cy.get('button[type="submit"]').last().click({force:true})

})
 //************************************************************************* */
//////////**********************Catogery Setting**************************** */
//************************************************************************* */

it("Login & Catogery Settings edit and save value Successfully.",()=>{
  cy.visit('https://manager.spadasoft.com/dashboard/all-tournaments')
  cy.get('input[name="email"]').type('superadmin@gmail.com')
  cy.get('input[name="password"]').type('password')
  cy.get('button[type="submit"]').click()
  cy.wait(8000) 
  cy.get('button[type="button"]').eq(0).click({force:true}).wait(3000)
  cy.get('#combo-box-demo').type(name ).type('{downarrow}{enter}').wait(4000)
  cy.get('.MuiList-root > :nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click();
  cy.contains('Category Settings').click({force:true})
  cy.wait(6000)
  cy.get('input[type="checkbox"]').eq(0).click({ force: true });

  cy.contains('Change Settings').click({force:true})

  cy.get('select[name="currency"]').then($dropdown => {
    const thirdOptionValue = $dropdown.find('option').eq(1).val();
    cy.wrap($dropdown).select(thirdOptionValue);})
  cy.get('input[name="registrationLimit"]').type('50');

  cy.get('select[name="onlinePayments"]').then($dropdown => {
    const thirdOptionValue = $dropdown.find('option').eq(1).val();
    cy.wrap($dropdown).select(thirdOptionValue);})

    cy.get('select[name="method"]').then($dropdown => {
      const thirdOptionValue = $dropdown.find('option').eq(1).val();
      cy.wrap($dropdown).select(thirdOptionValue);})

      cy.get('input[name="fee"]').type('100')
      cy.get('input[name="mdEntries"]').type("50")
      cy.get('input[name="mdWCEntries"]').type("50")
      cy.get('input[name="mdSeeds"]').type("50")
      cy.get('input[name="qEntries"]').type("50")
      cy.get('input[name="qWCEntries"]').type("50")
      cy.get('input[name="qSeeds"]').type("50")
      cy.get('select[name="status"]').then($dropdown => {
      const thirdOptionValue = $dropdown.find('option').eq(1).val();
      cy.wrap($dropdown).select(thirdOptionValue);})
      cy.get('input[name=service]').type('100')
        //  cy.contains("Save").click()
})

//*********************************************************************************/
// ******************************   Stage Setting ********************************//
//********************************************************************************/


it.only("Login & edit Stage Setting Successfully.",()=>{
  cy.visit('https://manager.spadasoft.com/dashboard/all-tournaments')
  cy.get('input[name="email"]').type('superadmin@gmail.com')
  cy.get('input[name="password"]').type('password')
  cy.get('button[type="submit"]').click()
  cy.wait(5000) 
  cy.get('button[type="button"]').eq(0).click({force:true}).wait(3000)
  cy.get('#combo-box-demo').type(name).type('{downarrow}{enter}').wait(4000);

  cy.get('.MuiList-root > :nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click({force:true});
  cy.wait(5000);
  cy.contains(/Stage Settings|Court Settings/).click({ force: true });
  cy.wait(6000)
  cy.get('input[type="checkbox"]').eq(0).click({ force: true });
  cy.contains('Change Settings').click({force:true})

  cy.get('input[name="name"]').type("Test Tournament create")
  cy.get('select[name="status"]').select(1)

  cy.get('button[type="submit"]').last().click()

    cy.get('input[name="generalLimit"]').type("500")
    cy.get('input[name="individualMetricLimit"]').click({force:true})
    cy.get('input[name="allowParticipantsToAddResults"]').click({force:true})

    cy.get('select[name="attachmentsStatus"]').then($dropdown => {
      const thirdOptionValue = $dropdown.find('option').eq(1).val();
      cy.wrap($dropdown).select(thirdOptionValue);})

      cy.contains('Save').click({force:true})
})


})