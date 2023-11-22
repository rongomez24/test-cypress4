/// <reference types="Cypress" />
/// Test de ingreso a emaras y modificación del domicilio de la Administración de Consorcios
// Commands generados: emaras_login()

describe('Test de Emaras', ()=>{
var misdatos
    before('Conectarme a Emaras.com.ar',()=>{
        cy.visit('https://www.emaras.com.ar')
        cy.fixture('./screen_test_login').then(datos => {
            misdatos = datos;
        })
    })

    it('Test Login', ()=>{
        cy.fixture('./screen_login').then(selectores=>{
        misdatos.forEach((datos)=> {

            // Usuario selector en fixture screen_login.json
            cy.get(selectores.sel_usuario).type(datos.data_usuario)
            //Clave
            cy.get(selectores.sel_clave).type(datos.data_clave)
            //Boton Ingresar
            cy.get(selectores.sel_boton_ingresar).click()
            cy.get(selectores.sel_cerrar_sesion).click()
        })
    })
})
})
