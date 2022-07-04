'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "productRecipes", [
                {
                    productId: 6,
                    recipeId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    productId: 1,
                    recipeId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    productId: 3,
                    recipeId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ],
            {})
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete("productRecipes", null, {});
    }
};
