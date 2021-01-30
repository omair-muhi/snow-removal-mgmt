'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('employee', [{
                Name: 'Joshua Lerson',
                Title: 'Snow Crew Lead',
                Contact: '416-225-8787',
                Admin: false,
                assigned: false,
<<<<<<< HEAD:seeders/2employee.js
                CrewId:1,
=======
                // CrewId:1,
>>>>>>> stable-f548df9:seeders/3employee.js
                createdAt: new Date(),
                updatedAt: new Date(),

            },
            {
                Name: 'Natalie Calio',
                Title: 'Crew Manager',
                Contact: '248-558-7812',
                Admin: true,
                assigned: true,
<<<<<<< HEAD:seeders/2employee.js
                CrewId:2,
=======
                // CrewId:2,
>>>>>>> stable-f548df9:seeders/3employee.js
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Name: 'Nicholas Jenkins',
                Title: 'Snow Crew Member',
                Contact: '313-852-4561',
                Admin: false,
                assigned: false,
<<<<<<< HEAD:seeders/2employee.js
                CrewId:2,
=======
                // CrewId:2,
>>>>>>> stable-f548df9:seeders/3employee.js
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Name: 'Jill Fulger',
                Title: 'Snow Crew Member',
                Contact: '323-842-4561',
                Admin: false,
                assigned: false,
<<<<<<< HEAD:seeders/2employee.js
                CrewId:3,
=======
                // CrewId:3,
>>>>>>> stable-f548df9:seeders/3employee.js
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return Promise.all([queryInterface.bulkDelete('employee', {}, null)]);
    }
};