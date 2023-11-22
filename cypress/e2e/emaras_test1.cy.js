/// <reference types="Cypress" />
/// Test de ingreso a emaras y modificación del domicilio de la Administración de Consorcios
// Commands generados: emaras_login()

describe('Test de Emaras', ()=>{

    before('Conectarme a Emaras.com.ar',()=>{
        cy.visit('https://www.emaras.com.ar')
    })

    it('Cambio Domicilio de Adm.Consorcios', ()=>{

        cy.emaras_login()  // uso del login
        cy.emaras_menu_adm() // seleccion de consorcio y acceder a la pantalla adm. desde el menu
        cy.fixture('./screen_menu').then(datos => {
            // Click en el domicilio de la administracion
            cy.emaras_write(datos.sel_domicilio,datos.data_domicilio)
            /// Click boton guardar
            cy.emaras_click(datos.sel_guardar)
            // click link cerrar sesión
            cy.emaras_click(datos.sel_cerrar_sesion)
        })

    })

})

