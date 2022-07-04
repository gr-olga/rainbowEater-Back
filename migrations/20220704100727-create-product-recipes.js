'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('productRecipes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            productId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "products",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            recipeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "recipes",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('productRecipes');
    }
};

// npx sequelize-cli seed:generate --name some-recipe
// npx sequelize-cli seed:generate --name productRecipe