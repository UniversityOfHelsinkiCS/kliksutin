import { baseUrl } from '../support/e2e'

import getQuestionData from '../../src/server/db/seeders/data/devQuestionData'
import { Question } from '../../src/client/types'

describe('Kliksutin web page', () => {
  let questionData

  it('loads the main page', () => {
    cy.visit(baseUrl)

    cy.contains('Hi, welcome to Kliksutin')
  })

  it('loads visible questions correctly', () => {
    cy.visit(baseUrl)

    questionData = getQuestionData()

    cy.wrap(questionData).each((question: Question) => {
      if (!question.visibility.options) {
        cy.contains(question.title.en)
      }
    })
  })

  it('does not load invisible questions before they have been touched', () => {
    cy.visit(baseUrl)

    questionData = getQuestionData()

    cy.wrap(questionData).each((question: Question) => {
      if (question.visibility.options) {
        cy.contains(question.title.en).should('not.exist')
      }
    })
  })

  it('has spot for recommendations', () => {
    cy.visit(baseUrl)

    cy.contains('Dimensions that support your selections')
  })
})
