import { baseUrl } from '../support/e2e'

import getQuestionData from '../../src/server/db/seeders/data/devQuestionData'

describe('Kliksutin web page', () => {
  beforeEach(() => cy.visit(baseUrl))

  it.skip('loads the main page', () => {
    cy.contains('Hi, welcome to Kliksutin')
  })

  it('form loads correctly', () => {
    cy.visit(baseUrl)
    cy.contains('Kurssin koko')
    cy.contains('Osallistuminen')
    cy.contains('Tallennus')
    cy.contains('Suoritusmuoto')
    cy.contains('Arviointi')
  })
})
