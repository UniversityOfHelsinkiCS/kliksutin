const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.changeColumn('surveys', 'name', {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.changeColumn('surveys', 'name', {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    })
  },
}
