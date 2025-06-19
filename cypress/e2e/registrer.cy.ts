describe("PruebaRegistrer",()=>
{


           beforeEach(()=>{
         cy.visit("http://localhost:4200"); // Visita la página de inicio (login)

        // Espera a que el input de usuario del login sea visible antes de intentar hacer clic en el enlace de registro
        cy.get('#usuario').should('be.visible');

        // Haz clic en el enlace para ir a la página de registro
        cy.contains(".nav-registro", "Regístrate ahora").click();

        // Verifica que la URL haya cambiado a la ruta de registro
        cy.url().should("include", "/registro");

    })

    it("Registrar-User",()=>
    {

         const username = `testuser3`; 
        const password = "password123"; 
        cy.get("#usuario").clear().type(username);

         cy.get("#password").clear().type(password);

        cy.get(".btn-register").click();
    })
})