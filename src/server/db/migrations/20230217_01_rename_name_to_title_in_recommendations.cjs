module.exports = {
    up: async ({ context: queryInterface }) => {
      await queryInterface.renameColumn('recommendations', 'name', 'title')
    },
    down: async ({ context: queryInterface }) => {
      await queryInterface.renameColumn('recommendations', 'title', 'name')
    },
  }
  