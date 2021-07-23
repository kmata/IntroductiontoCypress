import selector from '../../cypress/fixtures/selectors/todoselectors'


export function navigate () {
        cy.visit('/')
    }

export function addTodo (todoText){
        cy.get(selector.inputTxt).type(todoText + "{enter}")
    }
