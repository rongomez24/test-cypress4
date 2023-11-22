/// <reference types="Cypress" />

describe('Test de Emaras', ()=>{

    before('Conectarme a Emaras.com.ar',()=>{
        cy.visit('https://www.emaras.com.ar')
    })

    it('Control de cambio de Domicilio', ()=>{

        cy.emaras_login()  // uso del login
        cy.emaras_menu_adm() // seleccion de consorcio y acceder a la pantalla adm. desde el menu
        cy.fixture('./screen_menu').then(datos => {
            // Click en el domicilio de la administracion
            //cy.get('input[name="domicilio"]').should('have.value','San Juan 5050')
            cy.emaras_esIgual(datos.sel_domicilio,datos.data_domicilio)
            // click link cerrar sesión
            cy.emaras_click(datos.sel_cerrar_sesion)
        })
    })

})

