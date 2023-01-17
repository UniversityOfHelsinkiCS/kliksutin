import { baseUrl } from '../support/e2e'

describe('template spec', () => {
  it.skip('passes', () => {
    cy.visit(baseUrl)
    cy.contains('Kliksutin')
  })
})
