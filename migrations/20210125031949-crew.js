const path = require('path');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'crew',
      require(path.join(__dirname + '/PATH/TO/models', 'crew.js')).def(Sequelize)
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('crew');
  }
};
