import { DataTypes } from 'sequelize'

import { Migration } from '../connection'

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.addColumn('recommendations', 'type', {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  })
}

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('recommendations', 'type')
}
