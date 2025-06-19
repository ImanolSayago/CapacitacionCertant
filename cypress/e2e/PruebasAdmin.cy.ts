describe("Funcionalidades admin",()=>
{
    beforeEach(()=>{
        cy.visit("http://localhost:4200");

        cy.get("#usuario").type("admin1");
        cy.get("#password").type("123456");

        cy.get('button[type="submit"]').click()

        cy.url().should("include","/main-admin/discos")

         cy.contains('.logo a', 'Certant music').should('be.visible');
    })

    describe("Seccion discos admin",()=>{

         it("Verificacion admin",()=>
        {
        cy.contains('h1', 'Panel de administrador').should('be.visible'); 
        });


        it("irFormEdit",()=>{

             cy.get('.contenedor-disco').should('have.length.at.least', 1);
            cy.get(".contenedor-disco").first().find('a.btn-edit').click();
                
               cy.url().should('match', /\/main-admin\/edit-disco\/\d+$/);

               cy.get('.form-container').should('be.visible');

        cy.contains('h2', 'Editando').should('be.visible'); 
        
        cy.get('label[for="titulo"]').should('be.visible').and('contain.text', 'Ingrese el nuevo titulo');
        cy.get('#titulo').should('be.visible'); 
        
        cy.get('label[for="anoCreacion"]').should('be.visible').and('contain.text', 'Ingrese el nuevo año de creacion');
        cy.get('#anoCreacion').should('be.visible'); 

        cy.get('.submit-button').should('be.visible').and('contain.text', 'Editar informacion');
        
        
        })

        it("Editar disco",()=>
        {
              const nuevoTitulo = `Disco Editado desde Cyprees`; 
        const nuevoAno = '3030'; 

     
        cy.get('.contenedor-disco').should('have.length.at.least', 1); 
        cy.get(".contenedor-disco").first().find('a.btn-edit').click(); 
        cy.url().should('match', /\/main-admin\/edit-disco\/\d+$/);


     
        cy.get('#titulo').clear().type(nuevoTitulo);
        cy.get('#anoCreacion').clear().type(nuevoAno);

    
        cy.get('.submit-button').click();

        cy.url().should('include', '/main-admin/discos');

    
        cy.contains('.contenedor-disco h3', nuevoTitulo).should('be.visible');
        
      
        cy.contains('.contenedor-disco', nuevoTitulo) 
          .find('p') 
          .should('contain.text', nuevoAno); 

        })

        it("Crear nuevo disco",()=>
        {
              const nuevoTitulo = `Nuevo Disco de Cypress`; 
            const nuevoAno = '5050';
            cy.contains("li a", "Agregar discos").click();

             cy.url().should("include", "/main-admin/agregarDiscos");

              cy.contains('h2', 'Crear Nuevo Disco').should('be.visible');
    
        cy.get('#titulo').type(nuevoTitulo);
        cy.get('#anoCreacion').type(nuevoAno);

        cy.get('#imagen').selectFile('cypress/fixtures/badbunny.jpg');

            cy.get('#artista').select('1'); 

            cy.get('button.submit-button').should('contain.text', 'Crear Disco').click();
        })

       // it("Borrar disco",()=>
        //{
          //  cy.get('.contenedor-disco').should('have.length.at.least', 1); 

           // cy.get(".contenedor-disco").last().find('a.btn-delete').click();


        //});

        it("Crear cancion",()=>
        {
             const tituloCancion = `Cancion nueva cypress`; 
           
            cy.contains("li a","Canciones").click();

            cy.get('.add-cancion-link').should('be.visible');
            cy.get('.add-cancion-link').click();

            cy.url().should('include', '/main-admin/crearCanciones');

             cy.get("#titulo").clear().type(tituloCancion)

            cy.get("#idDisco option") 
          .not('[disabled]') 
          .then(($options) => {
            const lastDiscoValue = $options.last().val();
            cy.get("#idDisco").select(String(lastDiscoValue));
          });

            

            cy.get("#idArtista option").not('[disabled]').then(($options) => {
        const lastOptionValue = $options.last().val();
        cy.get("#idArtista").select(String(lastOptionValue));

        
            });

               cy.get('.submit-button').click();

        });

        it("Crear artista",()=>
        {
            cy.contains("li a", "Artistas").click()

            cy.get(".add-art-link").should("be.visible");
            cy.get(".add-art-link").click();

            cy.get("#nombreArtista").type("Nuevo artista cypress");

             cy.get('#tipo').select('Solista');

              cy.get('.submit-button').click();
        });

        it("Logout",()=>
        {
            cy.contains("li a","Salir").click();
              cy.url().should("include", "/login");
        })

    })

   
})