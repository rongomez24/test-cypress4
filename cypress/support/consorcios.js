/// <reference types="Cypress" />

Cypress.Commands.add('emaras_menu_adm', () => {

        // seleccionar consorcio
        cy.get('[onmouseover="sorter.hover(2,1)"] > .evenselected > p > a > font').click()
        /// menu Usuarios del encabezado
        cy.get('[style="z-index: 93;"] > [href="#"] > font').trigger('mouseover')
        // click en el submenu "Datos de la Administración"
        cy.get('[style="z-index: 93;"] > ul > :nth-child(6) > font > a').click();

})


Cypress.Commands.add('emaras_write', (selector,texto) => {   
        cy.get(selector).clear().type(texto)
})

Cypress.Commands.add('emaras_click', (selector) => {   
        cy.get(selector).click()
})

Cypress.Commands.add('emaras_esIgual', (selector,texto) => {   
        cy.get(selector).should('have.value',texto)
})