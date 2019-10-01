const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../config/db");

class Pgmodel extends Model {}
Pgmodel.init(
  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
  },
  {
    sequelize,
    modelName: "Pgmodel"
  }
);
module.exports = Pgmodel;