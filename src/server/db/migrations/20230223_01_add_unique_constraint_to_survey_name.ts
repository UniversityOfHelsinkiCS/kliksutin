import { DataTypes } from 'sequelize'

import { Migration } from '../connection'

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.changeColumn('surveys', 'name', {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
}

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.changeColumn('surveys', 'name', {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  })
}
