'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('dsd', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_docente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'docente', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'edicao_disciplina', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      funcao: {
        type: Sequelize.STRING(45),
        defaultValue: null,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('dsd')
  }
};
