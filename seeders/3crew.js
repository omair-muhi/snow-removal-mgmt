'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('crew', [
      {

        employee_id: 1,
        job_id: 2,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {

        employee_id: 2,
        job_id: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {

        employee_id: 3,
        job_id: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      }], {});
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkDelete('crew', {}, null)]);
  }
};