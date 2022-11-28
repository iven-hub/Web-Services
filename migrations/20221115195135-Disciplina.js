'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('disciplina', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      codigo: {
        type: Sequelize.STRING(6),
        allowNull: false,
        unique: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        defaultValue: null,
      },
      sinopse: {
        type: Sequelize.STRING(120),
        defaultValue: null,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('disciplina')
  }
};
