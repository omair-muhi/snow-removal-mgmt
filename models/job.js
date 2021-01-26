const Sequelize = require("sequelize");
// Creating our Job Model
module.exports = function (sequelize, DataTypes) {
  const Job = sequelize.define("Job", {
    // Name cannot be null
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    client_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
      freezeTableName: true
    },

    location: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      freezeTableName: true
    },
  }, {
    freezeTableName: true
  });
  return Job;
};
