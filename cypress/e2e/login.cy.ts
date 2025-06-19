describe("Login pruebas", ()=>{

     beforeEach(() => {
        cy.visit('http://localhost:4200/login'); 
    });

     it("Login usuario", () => {
        const username = 'user1'; 
        const password = '123456';
        cy.get('#usuario').type(username); 

      
        cy.get('#password').type(password); 

        cy.get('button[type="submit"]').click();

       
         cy.url().should('include', '/discos-public'); 

          cy.contains('.logo a', 'Certant Music').should('be.visible');

     
    })

      it("Login admin", () => {
        const username = 'admin1'; 
        const password = '123456';

        cy.get('#usuario').type(username); 

      
        cy.get('#password').type(password); 

        
        cy.get('button[type="submit"]').click();

       
         cy.url().should('include', 'main-admin/discos'); 
     
    })

     it("Login fail", () => {
        const username = 'user111'; 
        const password = '123456111';
        cy.get('#usuario').type(username); 

      
        cy.get('#password').type(password); 

        cy.get('button[type="submit"]').click();

       
         cy.url().should('include', '/login'); 
    })

}

    

)