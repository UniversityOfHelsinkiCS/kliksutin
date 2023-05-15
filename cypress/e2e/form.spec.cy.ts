import { baseUrl } from '../support/e2e'

import getQuestionData from '../../src/server/data/questions'
import {
  DimensionSelectionData,
  MultipleChoiceType,
  Question,
  SingleChoiceType,
} from '../../src/client/types'

describe('Form section', () => {
  let questionData: Question[]

  beforeEach(() => {
    cy.clearAllSessionStorage()

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
        cy.log(
          `'Check if question is visible with title of [${question.title.fi}]`
        )
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

  it('user can make choices based on the questions', () => {
    questionData = getQuestionData()

    cy.get(`[data-cy = "dimension-select-investication"]`).click()

    cy.get(`[data-cy = "open-form-button"]`).click()

    cy.wrap(questionData).each((question: Question) => {
      if (!question.visibility.options) {
        cy.wrap(question.optionData.options).each(
          (
            option:
              | SingleChoiceType
              | MultipleChoiceType
              | DimensionSelectionData
          ) => {
            cy.contains(option.title.fi).click({ force: true })
            cy.log(
              `'Clicked [Question title: ${question.title.fi}, Option label: ${option.title.fi}]`
            )
          }
        )
      }
    })

    cy.get(`[data-cy = "submit-form-button"]`).click()

    cy.get(`[data-cy = "result-section-title"]`).should('exist')

    cy.get(`[data-cy = "recommendation-section-title"]`).should('exist')

    cy.get(`[data-cy = "back-to-selections"]`).should('exist')
  })

  it('user can reset the form before entering the results page', () => {
    questionData = getQuestionData()

    cy.get(`[data-cy = "dimension-select-investication"]`).click()

    cy.get(`[data-cy = "open-form-button"]`).click()

    cy.wrap(questionData).each((question: Question) => {
      if (!question.visibility.options) {
        cy.wrap(question.optionData.options).each(
          (
            option:
              | SingleChoiceType
              | MultipleChoiceType
              | DimensionSelectionData
          ) => {
            cy.contains(option.title.fi).click({ force: true })
            cy.log(
              `'Clicked [Question title: ${question.title.fi}, Option label: ${option.title.fi}]`
            )
          }
        )
      }
    })

    cy.get(`[data-cy = "reset-form-button"]:visible`).click()

    cy.get(`[data-cy = "open-form-button"]`).should('be.disabled')
  })

  it('user can reset the form in the results page', () => {
    questionData = getQuestionData()

    cy.get(`[data-cy = "dimension-select-investication"]`).click()

    cy.get(`[data-cy = "open-form-button"]`).click()

    cy.wrap(questionData).each((question: Question) => {
      if (!question.visibility.options) {
        cy.wrap(question.optionData.options).each(
          (
            option:
              | SingleChoiceType
              | MultipleChoiceType
              | DimensionSelectionData
          ) => {
            cy.contains(option.title.fi).click({ force: true })
            cy.log(
              `'Clicked [Question title: ${question.title.fi}, Option label: ${option.title.fi}]`
            )
          }
        )
      }
    })

    cy.get(`[data-cy = "submit-form-button"]`).click()

    cy.get(`[data-cy = "result-section-title"]`).should('exist')

    cy.get(`[data-cy = "recommendation-section-title"]`).should('exist')

    cy.get(`[data-cy = "reset-form-button"]:visible`).click()
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

  // Skipped because of no user information in the CI pipeline
  it.skip('user is happy and wants to press the button of happiness', () => {
    cy.get(`[data-cy = "open-form-button"]`).click()

    cy.get(`[data-cy = "submit-form-button"]`).click()

    cy.get(`[data-cy = "form-close-success-alert"]`).should('not.exist')

    cy.get(`[data-cy = "button-of-happiness"]`).click()

    cy.get(`[data-cy = "form-close-success-alert"]`).should('exist')
  })

  // Skipped because of no user information in the CI pipeline
  it.skip('user is confused and wants to make a support ticket', () => {
    cy.get(`[data-cy = "open-form-button"]`).click()
    cy.get(`[data-cy = "submit-form-button"]`).click()
    cy.get(`[data-cy = "form-close-success-alert"]`).should('not.exist')

    cy.get(`[data-cy = "button-of-confusion"]`).click()
    cy.get(`[data-cy = "form-close-success-alert"]`).should('not.exist')

    cy.location().should((loc) => expect(loc.pathname).to.eq('/contact'))

    cy.contains('Yhteydenotto')

    cy.get(`[data-cy = "contact-ticket-textfield"]`).type('I am so confused!')
    cy.get(`[data-cy = "send-contact-ticket-button"]`).click()
    cy.get(`[data-cy = "contact-ticket-success-alert"]`).should('exist')
  })
})
