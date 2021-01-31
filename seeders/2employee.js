'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('employee', [{
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
            },
            {
                Name: 'Jill Fulger',
                Title: 'Snow Crew Member',
                Contact: '323-842-4561',
                Admin: false,
                assigned: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Name: 'Bill Rossa',
                Title: 'Snow Crew',
                Contact: '312-252-4561',
                Admin: false,
                assigned: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Name: 'Ryan Jikel',
                Title: 'Snow Crew',
                Contact: '323-842-4362',
                Admin: false,
                assigned: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.bulkDelete('employee', {}, null)]);
    }
};