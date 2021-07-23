/// <reference types= "cypress" />

import * as todoPage from '../../page-objects/todo-page'

describe ('Visual validation', () => {

    before(() => todoPage.navigate())


    it ('Should look good', () => {
        cy.screenshot('todos')
        todoPage.addTodo('First Row')


    })




})