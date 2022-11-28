'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('curso', [
      {
        sigla: 'EISC',
        nome: 'Engenharia Informática e Sistemas Computacionais',
        conferegrau: 'Licenciatura',
      },
      {
        sigla: 'PSI',
        nome: 'Psicologia',
        conferegrau: 'Licenciatura',
      },
      {
        sigla: 'OCV',
        nome: 'Ortóptica e Ciência de Visão',
        conferegrau: 'Licenciatura',
      },
      {
        sigla: 'GHT',
        nome: 'Gestão de Hotelaria e Turismo',
        conferegrau: 'Licenciatura',
      },
      {
        sigla: 'LRE',
        nome: 'Linguas e Relações Empresariais',
        conferegrau: 'Licenciatura',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('curso', null, {});
  },
};
