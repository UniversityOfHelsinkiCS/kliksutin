import { baseUrl } from '../support/e2e'

import getQuestionData from '../../src/server/data/questions'
import {
  ChoiceType,
  DimensionSelectionData,
  MultipleChoiceType,
  Question,
  SingleChoiceType,
} from '../../src/client/types'

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

  it('user can proceed with empty form to the results', () => {
    cy.get(`[data-cy = "dimension-select-discussion"]`).click()

    cy.get(`[data-cy = "open-form-button"]`).click()

    // No selections in the middle

    cy.get(`[data-cy = "submit-form-button"]`).click()

    cy.get(`[data-cy = "result-section-title"]`).should('exist')

    cy.get(`[data-cy = "result-section-title"]`).should('exist')

    cy.get(`[data-cy = "back-to-selections"]`).should('exist')
  })

  it('users can make choices based on the questions', () => {
    cy.get(`[data-cy = "dimension-select-investication"]`).click()

    cy.get(`[data-cy = "open-form-button"]`).click()

    cy.wrap(questionData).each((question: Question) => {
      cy.wrap(question.optionData.options).each(
        (
          option: SingleChoiceType | MultipleChoiceType | DimensionSelectionData
        ) => {
          cy.contains(option.label.fi).click({ force: true })
        }
      )
    })

    cy.get(`[data-cy = "submit-form-button"]`).click()

    cy.get(`[data-cy = "result-section-title"]`).should('exist')

    cy.get(`[data-cy = "recommendation-section-title"]`).should('exist')

    cy.get(`[data-cy = "back-to-selections"]`).should('exist')
  })

  it('users can reset the form before entering the results page', () => {
    cy.get(`[data-cy = "dimension-select-investication"]`).click()

    cy.get(`[data-cy = "open-form-button"]`).click()

    cy.wrap(questionData).each((question: Question) => {
      cy.wrap(question.optionData.options).each(
        (
          option: SingleChoiceType | MultipleChoiceType | DimensionSelectionData
        ) => {
          cy.contains(option.label.fi).click({ force: true })
        }
      )
    })

    cy.get(`[data-cy = "reset-form-button"]`).click()

    cy.get(`[data-cy = "open-form-button"]`).should('be.disabled')
  })

  it('users can reset the form in the results page', () => {
    cy.get(`[data-cy = "dimension-select-investication"]`).click()

    cy.get(`[data-cy = "open-form-button"]`).click()

    cy.wrap(questionData).each((question: Question) => {
      cy.wrap(question.optionData.options).each(
        (
          option: SingleChoiceType | MultipleChoiceType | DimensionSelectionData
        ) => {
          cy.contains(option.label.fi).click({ force: true })
        }
      )
    })

    cy.get(`[data-cy = "submit-form-button"]`).click()

    cy.get(`[data-cy = "result-section-title"]`).should('exist')

    cy.get(`[data-cy = "recommendation-section-title"]`).should('exist')

    cy.get(`[data-cy = "reset-form-button"]`).click()

    cy.get(`[data-cy = "open-form-button"]`).should('be.disabled')
  })

  it('after submitting users can return to the form to modify selections', () => {
    cy.get(`[data-cy = "open-form-button"]`).click()

    cy.contains('Tentti').click()

    cy.get(`[data-cy = "submit-form-button"]`).click()
    cy.get(`[data-cy = "result-section-title"]`).should('exist')
    cy.get(`[data-cy = "recommendation-section-title"]`).should('exist')

    cy.contains('Olet valinnut kurssillesi suoritusmuodoksi tentin.').should(
      'exist'
    )

    cy.get(`[data-cy = "back-to-selections"]`).should('exist').click()

    cy.contains('Tentti').click()
    cy.contains('Välitehtävät').click()

    cy.get(`[data-cy = "submit-form-button"]`).click()

    cy.contains('Olet valinnut kurssillesi suoritusmuodoksi tentin.').should(
      'not.exist'
    )
    cy.contains(
      'Olet valinnut kurssillesi suoritusmuodoksi välitehtävät.'
    ).should('exist')
  })
})
