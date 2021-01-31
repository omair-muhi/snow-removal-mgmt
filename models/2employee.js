const model = require('../models/');
const Sequelize = require("sequelize");

// Creating our Employee Model
module.exports = function (sequelize, DataTypes) {
  const Employee = sequelize.define("Employee", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },

    Title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    Contact: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,

    },
    Admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue:false

    },
    assigned: {
      type: Sequelize.BOOLEAN,
      defaultValue:false

    },

  }, {
    freezeTableName: true
  });

  return Employee;
};