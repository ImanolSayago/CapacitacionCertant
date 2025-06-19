describe("Funcionalidades de Usuario Público", () => {

beforeEach(() => {
        cy.visit('http://localhost:4200/login'); 
        
        cy.get('#usuario').type('user1'); 
        cy.get('#password').type('123456'); 
        
        cy.get('button[type="submit"]').click();
        
        cy.url().should('include', '/discos-public'); 
        
        cy.contains('.logo a', 'Certant Music').should('be.visible');
    });

      describe('Sección Discos Públicos (/discos-public)', () => {
        
      it('debería mostrar el campo de búsqueda, el contenedor principal de discos y al menos un disco', () => {
            cy.get('input[placeholder="Buscar por nombre de disco o artista..."]').should('be.visible'); 

            cy.get('.lista-discos').should('be.visible');

            cy.get('.contenedor-disco').should('have.length.at.least', 1); 

             cy.get('app-vista-disco').should('exist');
        });


         it('debería permitir navegar al detalle de un disco desde el botón "Ver disco"', () => {
        
            cy.get('.contenedor-disco').first().find('a.btn-ir').click(); 
            
            cy.url().should('match', /\/discos-public\/\d+$/); 

           cy.get('.txt-carta h1').should('be.visible')
        
        });


    it("navegar-canciones",()=>
    {
        cy.contains("li a", "Canciones").click()

        cy.url().should("include", "/canciones-public");

        cy.contains("h2","Nuestras Canciones").should("be.visible")
    })

     it("navegar-artistas",()=>
    {
        cy.contains("li","Artistas").click()

        cy.url().should("include","artistas-public"),

        cy.contains("h2","Nuestros artistas").should("be.visible");
    });

        it('Debería permitir al usuario cerrar sesión', () => {
        cy.contains('li a', 'Salir').click();
        cy.url().should('include', '/login');
        cy.get('#usuario').should('be.visible');
        cy.get('#password').should('be.visible');
    });

    });

})