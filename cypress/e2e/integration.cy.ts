/// <reference path="../support/index.d.ts" />


describe('Home', () => {
  it('should be able to visit the home page', () => {
    cy.visit('http://localhost:3000')
    cy.wait(300)

    cy.findByText(/Deal Gran/i).should('exist')
    cy.findByText(/Cada desafio a menos é um passo para o sucesso/i).should('exist')

    cy.findByTestId('sign-in-button').should('exist')

    cy.findByTestId('sign-in-button').click()

    cy.findByTestId('login-out-button').click()

    cy.findByTestId('login-out-input').should('exist')

    cy.findByTestId('login-out-input').type('user test')

    cy.findByTestId('login-out-enter').click()

    cy.wait(2000)

    cy.findByTestId('panel-button').should('exist')

    cy.findByTestId('panel-button').click()

    cy.findByTestId('create-user-button').click()

    cy.findByTestId('cancel-button').click()

    cy.findByTestId('sign-out-button').click()
  })
})
