'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('job', [{
                client_name: 'Jack Fereday',
                location: '1289 Water Street',
                active: true,
                assigned:false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                client_name: 'Nick Bolson',
                location: '3599 Benton Street',
                active: true,
                assigned:false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                client_name: 'Lisa Dorsy',
                location: '3360 Port Washington Road',
                active: true,
                assigned:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                client_name: 'Bill Boler',
                location: '4142 White Point Road',
                active: true,
                assigned:false,
                createdAt: new Date(),
                updatedAt: new Date()
            },            {
                client_name: 'Renarin Dorsy',
                location: '1606 Eglinton Avenue',
                active: true,
                assigned:true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                client_name: 'Navani Delaine',
                location: '1021 Whitmore Road',
                active: false,
                assigned:false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.bulkDelete('job', {}, null)]);
    }
};