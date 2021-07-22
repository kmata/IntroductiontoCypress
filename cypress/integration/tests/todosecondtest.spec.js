/// <reference types ="cypress" />

import selector from '../../fixtures/selectors/todoselectors.js'

describe ('Validations Test', () => {

    it('Add a New Todo List', () => {
        cy.visit('/')
        cy.get(selector.inputTxt , {timeout:6000}).type("Test{enter}")
        
        cy.get(selector.label).should('have.text', 'Test')

        cy.get(selector.bullet).should('not.be.checked')

        cy.get(selector.bullet).click()
        
        cy.get(selector.label).should('have.css','text-decoration-line')

        cy.get(selector.clearHiperLink).click()

        cy.get(selector.list).should('not.have.descendants','li')

    })
})