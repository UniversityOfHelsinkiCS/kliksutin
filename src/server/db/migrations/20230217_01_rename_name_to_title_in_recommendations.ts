import { Migration } from '../connection'

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.renameColumn('recommendations', 'name', 'title')
}

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.renameColumn('recommendations', 'title', 'name')
}
