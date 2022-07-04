'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        static associate(models) {
            product.belongsToMany(models.recipe, {
                through: "productRecipes",
                foreignKey: "productId"
            })
        }
    }

    product.init({
        title: {type: DataTypes.STRING, allowNull: false},
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        color: {type: DataTypes.STRING, allowNull: false}
    }, {
        sequelize,
        modelName: 'product',
    });
    return product;
};


//npx sequelize-cli model:generate --name productRecipes --attributes productId:integer,recipeId:integer