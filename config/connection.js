// Connecting to mysql
// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection for employeedb

const sequelize = new Sequelize('snow_removal_Db', 'root', 'mikeServer1!', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Exports the connection for other files to use
module.exports = sequelize;