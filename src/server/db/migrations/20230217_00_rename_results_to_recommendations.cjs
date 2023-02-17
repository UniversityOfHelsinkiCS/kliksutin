module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.renameTable('results', 'recommendations')
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.renameTable('recommendations', 'results')
  },
}
