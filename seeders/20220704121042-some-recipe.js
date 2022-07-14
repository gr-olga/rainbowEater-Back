'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "recipes", [
                {
                    title: " New recipe figs",
                    image: "https://i.pinimg.com/564x/d9/ea/5f/d9ea5f1195b8b1bf26af924028377995.jpg",
                    color: "purple",
                    description: "take a figs and eat it with please",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: " New  Apple recipe",
                    image: "https://i.pinimg.com/564x/0b/88/5f/0b885ffb8eaefe60ea4b81be83f8af14.jpg",
                    color: "red, green",
                    description: "cut red apple like crab and eat ",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: " New Orange recipe",
                    image: "https://i.pinimg.com/564x/05/cb/65/05cb65ba70485a324c97c052d5094ccd.jpg",
                    color: "orange",
                    description: "cut orange orange like a wheel add some bread and eat ",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Green kiwi",
                    image: "https://i.pinimg.com/564x/3f/fc/89/3ffc89d0acdf159be066bffc737229c1.jpg",
                    color: "green",
                    description: "create a christmas tree, add some seeds",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: " New  Tomato recipe",
                    image: "https://i.pinimg.com/564x/2d/a2/e4/2da2e4d89d80c38b2038d3a1b7c75883.jpg",
                    color: "red",
                    description: "cut red tomatoes, create a ladybug and eat ",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Blubbery  penguin recipe",
                    image: "https://i.pinimg.com/564x/e3/85/4b/e3854b316fe3236e13db9ea6ff46a339.jpg",
                    color: "blue",
                    description: "cut orange orange like a wheel add some bread and eat ",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ])
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete("recipes", null, {});
    }
};
