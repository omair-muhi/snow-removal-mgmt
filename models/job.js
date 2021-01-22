// Creating our Job Model
module.exports = function(sequelize, DataTypes) {
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
//     schedule: {
//       type: DataTypes.STRING,
//       allowNull: false,
      // Better to check if the scheduled time can be filled when joining crews and jobs
      //for the day in javascript file // fronside -- manager assigns daily schedule to crews (unique: true)
    },
  });
  return Job;
};
