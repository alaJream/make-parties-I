'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // add userId to Event
    await queryInterface.addColumn('Events', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    });

    // add userId to Rsvp
    await queryInterface.addColumn('Rsvps', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // remove userId from Event
    await queryInterface.removeColumn('Events', 'userId');
    await queryInterface.removeColumn('Rsvps', 'userId');
  }
};