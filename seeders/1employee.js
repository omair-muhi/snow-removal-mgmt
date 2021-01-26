'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('employee', [
        {
          Name: 'Joshua Lerson',
          Title: 'Snow Crew Lead',
          Contact: '4785556285',
          Admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),  
          
      },
      { 
          Name: 'Natalie Calio',
          Title: 'Crew Manager',
          Contact: '4782346285',
          Admin: true,
          createdAt: new Date(),
          updatedAt: new Date()    
      },
      {  
          Name: 'Nicholas Jenkins',
          Title: 'Snow Crew Member',
          Contact: '4125556285',
          Admin: false,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },
  down:  (queryInterface, Sequelize) =>{
    return Promise.all([queryInterface.bulkDelete('employee' , {} , null )]);
  }
};
