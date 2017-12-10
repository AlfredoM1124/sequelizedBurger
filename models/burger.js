module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        // Initiates burger and verifies eligibility of the input
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
        //Creates row to determine if burger has been eaten or not   
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Burger;
  };