import { Migration } from '../connection'

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.renameTable('results', 'recommendations')
}

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.renameTable('recommendations', 'results')
}
