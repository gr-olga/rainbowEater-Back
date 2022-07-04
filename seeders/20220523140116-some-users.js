"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Apple",
          email: "apple@apple.com",
          password: "apple",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
        {
          name: "Banana",
          email: "banana@banana.com",
          password: "banana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },  
        {
          name: "Coco",
          email: "coco@coco.com",
          password: "coco",
          createdAt: new Date(),
          updatedAt: new Date(),
        },     
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};