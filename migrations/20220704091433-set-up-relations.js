'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.addColumn("trackers", "userId", {
            type: Sequelize.INTEGER,
            references: {
                model: "users",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("trackers", "userId")
    }
};
