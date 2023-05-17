import './commands'
import 'cypress-if'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

beforeEach(() => {
    cy.viewport('macbook-16')
    cy.visit('/')
})