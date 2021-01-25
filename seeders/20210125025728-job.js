'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('jobs', [
      {

        client_name: 'Jack Fereday',
        location: '33 Simon St.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {

        client_name: 'Nick Bolson',
        location: '3323 Gerari Rd.',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {

        client_name: 'Lisa Dorsy',
        location: '213 Lake St.',
        createdAt: new Date(),
        updatedAt: new Date()

      }], {});
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkDelete('jobs', {}, null)]);
  }
};