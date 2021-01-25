
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
      freezeTableName: true
    },
    
    Title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
      freezeTableName: true
    },
    Contact: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      freezeTableName: true
    },
<<<<<<< HEAD
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
=======
    Admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      freezeTableName: true
    }, 
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
>>>>>>> employeeTableAlter
  })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employees');
  }
};