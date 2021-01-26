
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
      },

      Title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      Contact: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      Admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }, {
      freezeTableName: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employee');
  }
};