import { DataTypes } from 'sequelize'

import { Migration } from '../connection'

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.addColumn('entries', 'session_token', {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  })
  await queryInterface.addColumn('entries', 'reminder_sent', {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  })
}

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('entries', 'session_token')
  await queryInterface.removeColumn('entries', 'reminder_sent')
}
