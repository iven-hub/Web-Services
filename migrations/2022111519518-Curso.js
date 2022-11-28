'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('curso', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      sigla: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      conferegrau: {
        type: Sequelize.STRING(45),
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('curso')
  }
};
