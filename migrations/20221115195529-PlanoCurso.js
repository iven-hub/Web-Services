'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('plano_curso', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'curso', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_disci: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'disciplina', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      semestre: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      activo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      data_status: {
        type: Sequelize.DATE,
        defaultValue: null,
      }      
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('plano_curso')
  }
};
