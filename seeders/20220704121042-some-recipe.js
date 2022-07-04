'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "recipes", [
                {
                    title: " New recipe figs",
                    image: "https://i.pinimg.com/564x/d9/ea/5f/d9ea5f1195b8b1bf26af924028377995.jpg",
                    color: "purple",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: " New  Apple recipe",
                    image: "https://i.pinimg.com/564x/0b/88/5f/0b885ffb8eaefe60ea4b81be83f8af14.jpg",
                    color: "red, green",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: " New Orange recipe",
                    image: "https://i.pinimg.com/564x/05/cb/65/05cb65ba70485a324c97c052d5094ccd.jpg",
                    color: "orange",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ])
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete("recipes", null, {});
    }
};
