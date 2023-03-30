import { DataTypes } from 'sequelize'

import { Migration } from '../connection'

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.addColumn('recommendations', 'created_at', {
    type: DataTypes.DATE,
    allowNull: false,
  })

  await queryInterface.addColumn('recommendations', 'updated_at', {
    type: DataTypes.DATE,
    allowNull: false,
  })
}

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('recommendations', 'created_at')
  await queryInterface.removeColumn('recommendations', 'updated_at')
}
