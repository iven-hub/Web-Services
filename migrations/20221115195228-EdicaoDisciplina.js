'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('edicao_disciplina', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      edicao: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(45),
        defaultValue: null,
      },
      ano_lectivo: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      periodo: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'disciplina', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('edicao_disciplina')
  }
};
