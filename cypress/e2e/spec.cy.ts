import { baseUrl } from '../support/e2e'

import getQuestionData from '../../src/server/db/seeders/data/devQuestionData'

describe('Kliksutin test spec', () => {
  it('loads the main page', () => {
    cy.visit(baseUrl)
    cy.contains('Kliksutin')
  })

  it('form loads correctly', () => {
    cy.visit(baseUrl)
    cy.contains('Dimensiot')
    cy.contains('Kurssin koko')
    cy.contains('Osallistuminen')
    cy.contains('Tallennus')
    cy.contains('Suoritusmuoto')
    cy.contains('Arviointi')
  })
})
