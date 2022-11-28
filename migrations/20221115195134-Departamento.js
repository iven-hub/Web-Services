'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('departamento', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(45),
        defaultValue: null,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('departamento')
  }
};
