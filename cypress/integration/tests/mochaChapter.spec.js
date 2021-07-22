/// <reference types ="cypress" />

import selector from '../../fixtures/selectors/todoselectors.js'

describe ('Mocha Test', () => {


    it('Shoud add a new todo list', ()=> {
        cy.visit('/')
        cy.get(selector.inputTxt , {timeout:6000}).type("Test{enter}")
        
        cy.get(selector.label).should('have.text', 'Test')

        cy.get(selector.bullet).should('not.be.checked')
    })

    it('Shoud mark a todo as completed', ()=> {

        cy.get(selector.bullet).click()
        
        cy.get(selector.label).should('have.css','text-decoration-line')
    })

    it('Shoud clear todo list ', ()=> {
        cy.get(selector.clearHiperLink).click()

        cy.get(selector.list).should('not.have.descendants','li')

    })
})