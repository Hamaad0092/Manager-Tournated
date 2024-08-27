describe('Login & should Add new draw successfully',()=>{
    it('login user and add new draw',()=>{
        cy.visit('https://manager.spadasoft.com/');
        cy.get('input[name="email"]').type('superadmin@gmail.com');
        cy.get('input[name="password"]').type('password{enter}');
        cy.wait(5000); 
        cy.get('.MuiToolbar-root > .MuiIconButton-colorInherit').click();
        cy.get('#combo-box-demo').type('testing{downarrow}{enter}');
        cy.wait(4000);
        cy.get('.MuiList-root > :nth-child(5) > .MuiListItemText-root > .MuiTypography-root').click({force:true})
        cy.get('a[role="button"]').contains('Draws').click()
        cy.get('button[type="button"]').contains('Add new Draw').click({force:true})
        cy.get('select[name="category"]').last().select(1)
        cy.get('input[name="title"]').type('this is test data')
        cy.get('select[name="segment"]').last().select(1)
        cy.get('select[name="templates"]').select(1)
        cy.get('select[name="type"]').select(1)
        cy.get('select[name="genDraw"]').select(2)
        cy.get('input[type="checkbox"]').eq(1).click({force:true})
        // cy.get('button[type="submit"]').contains('Add Draw').click({force:true})
    })
})