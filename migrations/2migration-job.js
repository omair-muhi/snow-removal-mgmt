'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Job', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            client_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: false
            },
            location: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            active: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        }, {
            freezeTableName: true
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Job');
    }
};