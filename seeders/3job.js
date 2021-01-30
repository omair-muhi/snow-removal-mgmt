'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('job', [{
                client_name: 'Jack Fereday',
                location: '33 Simon St.',
                active: true,
                CrewId:1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                client_name: 'Nick Bolson',
                location: '3323 Gerari Rd.',
                active: false,
                CrewId:3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                client_name: 'Lisa Dorsy',
                location: '213 Lake St.',
                active: true,
                CrewId:3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                client_name: 'Nill Delaine',
                location: '213 Gozier St.',
                active: true,
                CrewId:2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.bulkDelete('job', {}, null)]);
    }
};