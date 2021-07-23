/// <reference types ="cypress" />

import selector from '../../fixtures/selectors/todoselectors.js'
import { navigate, addTodo } from '../../page-objects/todo-page.js'

describe ('My first Test', () => {
    it('Add a New Todo List', () => {
        
        navigate()
        addTodo("First Row")
        cy.get(selector.bullet).click()
        cy.get(selector.clearHiperLink).click()

    })
})