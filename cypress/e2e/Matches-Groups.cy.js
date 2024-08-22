describe("In matches Add new group should added values", () => {

    beforeEach(() => {
      cy.visit('https://manager.spadasoft.com/');
      cy.get('input[name="email"]').type('superadmin@gmail.com');
      cy.get('input[name="password"]').type('password{enter}');
      cy.wait(5000); 
      cy.get('.MuiToolbar-root > .MuiIconButton-colorInherit').click();
      cy.get('#combo-box-demo').type('testing{downarrow}{enter}');
      cy.wait(4000);
    });
  
    it("add new Group", () => {
        cy.get('.MuiList-root > :nth-child(5) > .MuiListItemText-root > .MuiTypography-root').click({force:true})
        cy.get('a[role="button"]').contains("Groups").click({force:true})
        cy.get('button[type="button"]').contains('Add Group').click({force:true})
        cy.get('select[name="category"]').last().select(1,{force:true})
        cy.get('select[name="segment"]').last().select(0,{force:true})
        cy.get('select[name="groupsType"]').last().select(1,{force:true})
        cy.get('input[name="groupsName"][type="text"]').last().type('100');
        cy.get('select[name="type"]').last().select(1,{force:true})
        cy.get('select[name="genGroups"]').last().select(1,{force:true})
        cy.get('select[name="algorithm"]').last().select(1,{force:true})
        cy.get('input[name="order"][type="checkbox"]').last().click({force:true})
        cy.get('input[name="matches"][type="checkbox"]').last().click({force:true})
        cy.get('textarea[name="comment"]').last().type("this is test text")
        cy.get('button[type="submit"]').last().click({force:true})

    })
})