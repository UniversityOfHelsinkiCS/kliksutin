import { baseUrl } from '../support/e2e'

import getRecommendationsData from '../../src/server/data/recommendations'
import { Recommendation } from '../../src/client/types'

describe('Recommendation section', () => {
  let recommendationData: Recommendation[]

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('tools are rendered on the side', () => {
    recommendationData = getRecommendationsData()

    cy.wrap(recommendationData).each((recommendation: Recommendation) => {
      cy.contains('a', recommendation.label, { matchCase: false }).should(
        'not.have.attr',
        'href',
        '#undefined'
      )
      cy.contains('a', recommendation.label, { matchCase: false }).invoke(
        'attr',
        'href'
      )
    })
  })

  it('dimension selection affects the chips on the side', () => {
    cy.get(`[data-cy = "dimension-select-acquisition"]`).click()
    cy.get(`[data-cy = "dimension-chip-compact-acquisition"]`)

    cy.get(`[data-cy = "dimension-select-production"]`).click()
    cy.get(`[data-cy = "dimension-chip-compact-production"]`)

    cy.get(`[data-cy = "dimension-select-collaboration"]`).click()
    cy.get(`[data-cy = "dimension-chip-compact-collaboration"]`)

    cy.get(`[data-cy = "dimension-select-discussion"]`).click()
    cy.get(`[data-cy = "dimension-chip-compact-discussion"]`)

    cy.get(`[data-cy = "dimension-select-investication"]`).click()
    cy.get(`[data-cy = "dimension-chip-compact-investication"]`)

    cy.get(`[data-cy = "dimension-select-practice"]`).click()
    cy.get(`[data-cy = "dimension-chip-compact-practice"]`)
  })

  it('dimension unselection affects the chips on the side', () => {
    cy.get(`[data-cy = "dimension-select-discussion"]`).click()
    cy.get(`[data-cy = "dimension-chip-compact-discussion"]`).should('exist')

    cy.get(`[data-cy = "dimension-chip-compact-investication"]`).should(
      'not.exist'
    )
    cy.get(`[data-cy = "dimension-chip-compact-practice"]`).should('not.exist')

    cy.get(`[data-cy = "dimension-select-discussion"]`).click()
    cy.get(`[data-cy = "dimension-chip-compact-discussion"]`).should(
      'not.exist'
    )
  })
})
