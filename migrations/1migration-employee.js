'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employee', {
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
        defaultValue: false

      },
      assigned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false

      },

    }, {
      freezeTableName: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Employee');
  }
};