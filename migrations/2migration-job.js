
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Job', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      client_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },

      location: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }, {
      freezeTableName: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Job');
  }
};