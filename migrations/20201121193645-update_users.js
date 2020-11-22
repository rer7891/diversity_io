'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Users',
      'first_name',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    )
     
    queryInterface.addColumn(
      'Users',
      'last_name',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    )

    queryInterface.addColumn(
      'Users',
      'password',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
