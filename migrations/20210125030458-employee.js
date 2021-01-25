
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employee', {
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
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      freezeTableName: true
    },
    Admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      freezeTableName: true
    }
  })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employee');
  }
};