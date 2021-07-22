/// <reference types ="cypress" />

import selector from '../../fixtures/selectors/todoselectors.js'

describe ('My first Test', () => {

    it('Add a New Todo List', () => {
        cy.visit('/')
        cy.get(selector.inputTxt , {timeout:6000}).type("Test{enter}")
        cy.get(selector.bullet).click()
        cy.get(selector.clearHiperLink).click()

    })
})