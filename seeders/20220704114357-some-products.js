'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "products", [
                {
                    title: "Red Aple",
                    description: "Red Delicious apples are medium-sized and have a conical shape.",
                    image: "https://i.pinimg.com/564x/d0/f4/a9/d0f4a9dbccb3b79a763e11189b074b8d.jpg",
                    color: "red",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Red cabbage",
                    description: "The red cabbage, also called purple cabbage",
                    image: "https://i.pinimg.com/564x/8f/0b/63/8f0b63108d3f92ba30a8569eadb20e68.jpg",
                    color: "red",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "orange",
                    description: "The orange is a usually round or oval citrus;",
                    image: "https://i.pinimg.com/564x/00/69/33/0069332fa51e45dbb8a57a9883574b0b.jpg",
                    color: "orange",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "banana",
                    description: "A banana is a curved, yellow fruit with a thick skin and soft sweet flesh." ,
                    image: "https://i.pinimg.com/564x/6b/11/e9/6b11e9d088c19ba78390df8f09c04dc0.jpg",
                    color: "yellow",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "green peas",
                    description: "What Are Green Peas? Green peas, or “garden peas" ,
                    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Peas_in_pods_-_Studio.jpg",
                    color: "green",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "figs",
                    description: "Figs are, therefore, soft fruits, with a thin skin whose colour varies from green to purple",
                    image: "https://i.pinimg.com/564x/0f/9e/2a/0f9e2a7c00d7dcf500f4de51ccc3c352.jpg",
                    color: "purple",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "blueberries",
                    description: "FIt is a bluish-black, rounded berry measuring 6mm of diameter." ,
                    image: "https://i.pinimg.com/564x/0f/9e/2a/0f9e2a7c00d7dcf500f4de51ccc3c352.jpg",
                    color: "blue",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

            ]
        )

    },

    async down(queryInterface, Sequelize) {

    }
};

// npx sequelize-cli seed:generate --name some-trackers
