'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tracker extends Model {
    static associate(models) {
      tracker.belongsTo(models.user)
    }
  }
  tracker.init({
    day:{ type: DataTypes.STRING, allowNull: false},
    color:{ type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
  }, {
    sequelize,
    modelName: 'tracker',
  });
  return tracker;
};