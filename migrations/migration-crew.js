
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Crew', {
      // primary key
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // a foreign key from Employee table
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Employee",
          key: 'id',
        }
      },
      // a foreign key from Job table
      job_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Job",
          key: 'id',
        }
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }, {
      freezeTableName: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Crew');
  }
};
