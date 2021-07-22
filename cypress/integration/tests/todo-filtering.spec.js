/// <reference types ="cypress" />

import selector, { list } from '../../fixtures/selectors/todoselectors.js'


describe('Filtering', () => {

    beforeEach (() =>{
        cy.visit('/')
        cy.get(selector.inputTxt).type("Test{enter}")
        cy.get(selector.inputTxt).type("Prueba{enter}")
        cy.get(selector.inputTxt).type("Exam{enter}")

        cy.get(selector.childList).click()
    })

    it('Should Filter Active', () => {

        cy.contains('Active').click()

        cy.get(selector.listChild).should('have.length',2)
    })


    it('Should Filter Completed', () => {

        cy.contains('Completed').click()

        cy.get(selector.listChild).should('have.length',1)
    })


    it('Should Filter All', () => {

        cy.contains('All').click()

        cy.get(selector.listChild).should('have.length',3)
    })

})