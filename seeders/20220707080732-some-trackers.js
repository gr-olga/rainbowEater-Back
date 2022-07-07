'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "trackers", [
                {
                    day: "monday",
                    color: ["red", "green", "yellow", "orange", "blue"],
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    day: "tuesday",
                    color: ["green", "yellow", "orange", "blue", "purple"],
                    userId: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

                {
                    day: "tuesday",
                    color: ["blue", "purple"],
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]
        )
    },

    async down(queryInterface, Sequelize) {

    }
};
