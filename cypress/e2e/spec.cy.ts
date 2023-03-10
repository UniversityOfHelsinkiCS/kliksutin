import { baseUrl } from '../support/e2e'

import getQuestionData from '../../src/server/data/questions'
import getRecommendationsData from '../../src/server/data/recommendations'
import { Question, RecommendationData } from '../../src/client/types'

describe('Form section', () => {
  let questionData: Question[]

  beforeEach(() => {
    cy.visit(baseUrl)

    cy.get(`[data-cy = "language-select"]`).click().contains('fi').click()

    cy.get(`[data-cy = "faculty-select"]`).click()
    cy.get(`[data-cy = "faculty-option-H50"]`).click()

    cy.get(`[data-cy = "dimension-select-collaboration"]`).click()
  })

  it('loads the main page', () => {
    cy.contains('Curre')
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
        cy.contains(question.title.fi)
      }
    })
  })

  it('does not load invisible questions before they have been touched', () => {
    questionData = getQuestionData()

    cy.wrap(questionData).each((question: Question) => {
      if (question.visibility.options) {
        cy.contains(question.title.fi).should('not.exist')
      }
    })
  })
})

describe('Recommendation section', () => {
  let recommendationData: RecommendationData[]

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it.skip('recommendations are rendered on the side', () => {
    recommendationData = getRecommendationsData()

    cy.wrap(recommendationData).each((recommendation: RecommendationData) => {
      cy.contains('a', recommendation.title.fi).invoke('attr', 'href')
    })
  })
})
