'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('employees', [{
                Name: 'Joshua Lerson',
                Title: 'Snow Crew Lead',
                Contact: '416-225-8787',
                Admin: false,
                assigned: false,
                createdAt: new Date(),
                updatedAt: new Date(),

            },
            {
                Name: 'Natalie Calio',
                Title: 'Crew Manager',
                Contact: '248-558-7812',
                Admin: true,
                assigned: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Name: 'Nicholas Jenkins',
                Title: 'Snow Crew Member',
                Contact: '313-852-4561',
                Admin: false,
                assigned: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.bulkDelete('employees', {}, null)]);
    }
};