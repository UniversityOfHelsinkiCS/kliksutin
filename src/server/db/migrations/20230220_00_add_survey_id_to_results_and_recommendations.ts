import { DataTypes } from 'sequelize'

import { Migration } from '../connection'

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.addColumn('results', 'survey_id', {
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  await queryInterface.addColumn('recommendations', 'survey_id', {
    type: DataTypes.INTEGER,
    allowNull: false,
  })
}

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('results', 'survey_id')
  await queryInterface.removeColumn('recommendations', 'survey_id')
}
