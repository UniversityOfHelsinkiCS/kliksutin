import { baseUrl } from '../support/e2e'

import getQuestionData from '../../src/server/db/seeders/data/devQuestionData'
import { Question } from '../../src/client/types'

describe('Kliksutin web page', () => {
  let questionData

  beforeEach(() => {
    cy.visit(baseUrl)

    cy.get(`[data-cy = "faculty-select"]`).click()
    cy.get(`[data-cy = "faculty-option-Faculty of Science"]`).click()

    cy.get(`[data-cy = "dimension-select-collaboration"]`).click()
  })

  it('loads the main page', () => {
    cy.contains('Kliksutin')
  })

  it('user must proceed after faculty and dimensions are selected', () => {
    cy.get(`[data-cy = "open-form-button"]`).should('not.be.disabled').click()
  })

  it('loads visible questions correctly', () => {
    cy.get(`[data-cy = "dimension-select-discussion"]`).click()

    cy.get(`[data-cy = "open-form-button"]`).click()

    questionData = getQuestionData()

    cy.wrap(questionData).each((question: Question) => {
      if (!question.visibility.options) {
        cy.contains(question.title.en)
      }
    })
  })

  it('does not load invisible questions before they have been touched', () => {
    questionData = getQuestionData()

    cy.wrap(questionData).each((question: Question) => {
      if (question.visibility.options) {
        cy.contains(question.title.en).should('not.exist')
      }
    })
  })

  it.skip('has spot for recommendations', () => {
    cy.contains('Tools that support your selections')
  })
})
