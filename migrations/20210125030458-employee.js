const path = require('path');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'employee',
      require(path.join(__dirname + '/PATH/TO/models', 'employee.js')).def(Sequelize)
    );
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([queryInterface.dropTable('employee')]);
  }
};