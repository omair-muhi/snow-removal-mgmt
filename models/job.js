// Creating our Joba model
module.exports = function(sequelize, DataTypes) {
  const Jobs = sequelize.define("Jobs", {
    // Name cannot be null
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    // The password cannot be null
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    schedule: {
      type: DataTypes.STRING,
      allowNull: false,
      // Better to check if the scheduled time can be filled when joining crews and jobs
      //for the day in javascript file // fronside -- manager assigns daily schedule to crews (unique: true)
    },
  });
  return Jobs;
};
