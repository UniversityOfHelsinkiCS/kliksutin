const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn('recommendations', 'created_at', {
      type: DataTypes.DATE,
      allowNull: false,
    })
    await queryInterface.addColumn('recommendations', 'updated_at', {
      type: DataTypes.DATE,
      allowNull: false,
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn('recommendations', 'created_at')
    await queryInterface.removeColumn('recommendations', 'updated_at')
  },
}
