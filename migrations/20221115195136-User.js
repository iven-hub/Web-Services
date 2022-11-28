'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
      },
      username: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      categoria: {
        type: Sequelize.STRING(45),
        defaultValue: null
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('user')
  }
};
