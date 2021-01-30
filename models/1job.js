const model = require('../models');
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
    },

    location: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },

    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue:false

    },
    assigned: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false

      },
    
  }, {
    freezeTableName: true
  });

  Job.associate = model => {
    Job.belongsTo(model.Crew, {
      foreignKey: {
        allowNull:true
      }
    });
  };

  return Job;
};