'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Job', {
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
          
              active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue:true
          
              },
              assigned: {
                  type: Sequelize.BOOLEAN,
                  allowNull: false,
                  defaultValue:false
          
                },
              
            }, {
              freezeTableName: true
            });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Job');
    }
};