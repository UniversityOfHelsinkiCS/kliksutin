import { DataTypes } from 'sequelize'

import { Migration } from '../connection'

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.addColumn('surveys', 'title', {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: {},
  })
  await queryInterface.addColumn('surveys', 'text', {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: {},
  })
}

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('surveys', 'title')
  await queryInterface.removeColumn('surveys', 'text')
}
