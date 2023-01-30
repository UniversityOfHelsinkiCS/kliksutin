const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('questions', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      survey_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {},
      },
      text: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      option_data: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {},
      },
      visibility: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {},
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('questions')
  },
}
