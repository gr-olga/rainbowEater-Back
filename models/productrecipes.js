'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productRecipes extends Model {
    static associate(models) {
      productRecipes.belongsTo(models.product)
      productRecipes.belongsTo(models.recipe)
    }
  }
  productRecipes.init({
    productId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productRecipes',
  });
  return productRecipes;
};