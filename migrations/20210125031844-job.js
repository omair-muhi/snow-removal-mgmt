
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jobs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    client_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
      freezeTableName: true
    },
    
    location: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      freezeTableName: true
    },
<<<<<<< HEAD
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
=======
          // Timestamps
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
>>>>>>> employeeTableAlter
  })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jobs');
  }
};