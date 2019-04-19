describe('Test case 1', function () {
    it('Success', function () {
        // expect(true).to.equal(true)
        cy.visit('http://mrp-dev.testz.net')
    
        cy.get('button').dblclick()          // Double click on button
        cy.focused().dblclick()              // Double click on el with focus
        cy.contains('เข้าสู่ระบบ').dblclick()
        // cy.url()
        // .should('include', 'intl/th/gmail/about/#')  
    })
})