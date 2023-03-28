import {
  Question,
  SingleChoiceType,
  MultipleChoiceType,
  DimensionSelectionData,
  Result,
  Locales,
} from '../../src/client/types'

import { baseUrl } from '../support/e2e'

import getQuestionData from '../../src/server/data/questions'
import getResultData from '../../src/server/data/results'

describe('Results section', () => {
  let questionData: Question[]
  let resultData: Result[]
  let selectedChoices: string[]

  beforeEach(() => {
    questionData = getQuestionData()

    selectedChoices = []

    cy.visit(baseUrl)

    cy.get(`[data-cy = "language-select"]`).click().contains('fi').click()

    cy.get(`[data-cy = "faculty-select"]`).click()
    cy.get(`[data-cy = "faculty-option-H50"]`).click()

    const dimensionQuestion = questionData.find((q) => q.priority === 0)

    if (!dimensionQuestion) return

    // Select all the dimensions
    cy.wrap(dimensionQuestion.optionData.options).each(
      (option: DimensionSelectionData) => {
        cy.get(`[data-cy = "dimension-select-${option.id}"]`).click()
      }
    )

    cy.get(`[data-cy = "open-form-button"]`).click()

    // Make random selections
    cy.wrap(questionData).each((question: Question) => {
      if (question.visibility.options) return
      if (question.optionData.type === 'info') return
      if (question.optionData.type === 'dimensions') return

      if (question.optionData.type === 'singleChoice') {
        const qOptions = question.optionData.options
        const randomIndex = Math.floor(Math.random() * qOptions.length)
        const randomOption = qOptions[randomIndex]

        cy.get(`[data-cy = "choice-select-${randomOption.id}"]`).click({
          force: true,
        })

        selectedChoices.push(randomOption.id)
      }

      if (question.optionData.type === 'multipleChoice') {
        const indices = new Set<number>()

        const qOptions = question.optionData.options
        const numberOfChoices = Math.floor(Math.random() * qOptions.length)

        while (indices.size < numberOfChoices) {
          const randomIndex = Math.floor(Math.random() * qOptions.length)
          indices.add(randomIndex)
        }

        Array.from(indices).map((index) => {
          const randomOption = qOptions[index]
          cy.get(`[data-cy = "choice-select-${randomOption.id}"]`).click({
            force: true,
          })
          selectedChoices.push(randomOption.id)
        })
      }
    })

    cy.get(`[data-cy = "submit-form-button"]`).click()
  })

  it('results section headings are rendered correctly', () => {
    resultData = getResultData()

    cy.get(`[data-cy = "result-section-title"]`).should('exist')
    cy.get(`[data-cy = "recommendation-section-title"]`).should('exist')

    // Loop through the results
    cy.wrap(selectedChoices).each((choiceID: string) => {
      const resultObject = resultData.find(
        (result) => result.optionLabel === choiceID
      )
      if (!resultObject) return

      cy.contains(resultObject.isSelected.fi)
    })
  })

  it('results section result dimension texts are rendered correctly', () => {
    resultData = getResultData()

    cy.get(`[data-cy = "result-section-title"]`).should('exist')
    cy.get(`[data-cy = "recommendation-section-title"]`).should('exist')

    // Loop through the results
    cy.wrap(selectedChoices).each((choiceID: string) => {
      const resultObject = resultData.find(
        (result) => result.optionLabel === choiceID
      )
      if (!resultObject) return

      for (const key in resultObject.data) {
        cy.get(`[data-cy = "result-wrapper-${choiceID}-${key}"]`).should(
          'exist'
        )
      }
    })
  })

  it('user can send a summary email', () => {
    resultData = getResultData()

    cy.get(`[data-cy = "result-section-title"]`).should('exist')
    cy.get(`[data-cy = "recommendation-section-title"]`).should('exist')
    cy.get(`[data-cy = "summary-email-success-alert"]`).should('not.exist')

    cy.get(`[data-cy = "summary-email-button"]`).should('exist').click()
    cy.get(`[data-cy = "summary-email-success-alert"]`).should('exist')
  })
})
