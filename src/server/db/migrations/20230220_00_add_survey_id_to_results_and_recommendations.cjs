const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn('results', 'survey_id', {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      })
    await queryInterface.addColumn('recommendations', 'survey_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn('results', 'survey_id')
    await queryInterface.removeColumn('recommendations', 'survey_id')
  },
}
