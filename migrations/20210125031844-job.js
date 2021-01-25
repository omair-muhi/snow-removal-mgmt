const path = require('path');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'job',
      require(path.join(__dirname + '/PATH/TO/models', 'job.js')).def(Sequelize)
    );
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([ queryInterface.dropTable('job')]);
  }
};