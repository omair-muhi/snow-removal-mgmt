
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Crews', {
      // primary key
      id: { type: Sequelize.INTEGER, primaryKey: true },
      // a foreign key from Employee table
      employee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Employees",
          key: 'id',
        }
      },
      // a foreign key from Job table
      job_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Jobs",
          key: 'id',
        }
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Crews');
  }
};
