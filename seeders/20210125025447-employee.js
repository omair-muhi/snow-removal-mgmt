'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return [
      queryInterface.bulkInsert('employees', [
        {

          Name: 'Joshua Lerson',
          Title: 'Snow Crew Lead',
          Contact: '4785556285',
          // createdAt: new Date(),
          // updatedAt: new Date()
    
      },
      {
  
          Name: 'Natalie Calio',
          Title: 'Snow Crew Lead',
          Contact: '4782346285',
          // createdAt: new Date(),
          // updatedAt: new Date()
    
      },
      {
  
          Name: 'Nicholas Jenkins',
          Title: 'Snow Crew Member',
          Contact: '4125556285',
          // createdAt: new Date(),
          // updatedAt: new Date()
    
      },
    ])];
  },

  down:  (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.bulkDelete('employees')]);
  }
};
