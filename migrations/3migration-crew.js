
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Crew', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      // a foreign key from Employee table
      employee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Employee",
          key: 'id',
          allowNull: true
        }
      },
      // a foreign key from Job table
      job_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Job",
          key: 'id',
          allowNull: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      freezeTableName: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Crew');
  }
};
