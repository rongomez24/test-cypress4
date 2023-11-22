/// <reference types="Cypress" />
/// ejecuta el login en base a los datos incluídos dentro de screen_login.json

Cypress.Commands.add('emaras_login', () => {
    cy.fixture('./screen_login').then(datos => {
            // Usuario selector en fixture screen_login.json
            cy.get(datos.sel_usuario).type(datos.data_usuario)
            //Clave
            cy.get(datos.sel_clave).type(datos.data_clave)
            //Boton Ingresar
            cy.get(datos.sel_boton_ingresar).click()
    })

})

