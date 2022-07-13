'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class recipe extends Model {
        static associate(models) {
            recipe.belongsToMany(models.product, {
                through: "productRecipes",
                foreignKey: "recipeId"
            })
        }
    }

    recipe.init({
        title: {type: DataTypes.STRING, allowNull: false},
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        color: {type: DataTypes.STRING, allowNull: false}
    }, {
        sequelize,
        modelName: 'recipe',
    });
    return recipe;
};