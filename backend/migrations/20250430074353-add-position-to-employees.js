'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * run sequelize-cli db:migrate
     * 
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */


    await queryInterface.addColumn(
      'employees', //table name Iwant to insert the column
      'position', //new column
      {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'employee',
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * run npx sequelize-cli db-migrate:undo
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */



    await queryInterface.removeColumn(
      'employees',
      'position'
    )
  }
};
