import { DataTypes } from 'sequelize'

import { Migration } from '../connection'

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.addColumn('entries', 'receive_reminder', {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  })

  await queryInterface.addColumn('entries', 'reminder_sent_at', {
    type: DataTypes.DATE,
    allowNull: true,
  })
}

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn('entries', 'receive_reminder')

  await queryInterface.removeColumn('entries', 'reminder_sent_at')
}
