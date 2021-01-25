
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
<<<<<<< HEAD
    return queryInterface.createTable('Crew', {
      // primary key
      id: { type: Sequelize.INTEGER, primaryKey: true },
      // a foreign key from Employee table
      employee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Employee",
=======
    return queryInterface.createTable('Crews', {
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
          model: "Employees",
>>>>>>> employeeTableAlter
          key: 'id',
        }
      },
      // a foreign key from Job table
      job_id: {
        type: Sequelize.INTEGER,
<<<<<<< HEAD
        references: {
          model: "Job",
          key: 'id',
        }
      },
=======
        allowNull: true,
        references: {
          model: "Jobs",
          key: 'id',
        }
      },
      // Timestamps
>>>>>>> employeeTableAlter
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Crews');
  }
};
