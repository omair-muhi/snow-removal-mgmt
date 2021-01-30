'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('crew', [
      {
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        createdAt: new Date(),
        updatedAt: new Date() 
      }], {});
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkDelete('crew', {}, null)]);
  }
};