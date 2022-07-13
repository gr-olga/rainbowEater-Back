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
                    description: "A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.",
                    image: "https://i.pinimg.com/564x/6b/11/e9/6b11e9d088c19ba78390df8f09c04dc0.jpg",
                    color: "yellow",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "green peas",
                    description: "What Are Green Peas? Green peas, or “garden peas",
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
                    description: "FIt is a bluish-black, rounded berry measuring 6mm of diameter.",
                    image: "https://i.pinimg.com/564x/0f/9e/2a/0f9e2a7c00d7dcf500f4de51ccc3c352.jpg",
                    color: "blue",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

////////////////////////
                {
                    title: "Tomatoes",
                    description: "They are usually red,  Each fruit contains at least two cells of small seeds surrounded by jellylike pulp.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
                    color: "red",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Yellow tomatoes",
                    description: "It is sweeter tasting than the red variety, o add color to a salad or food dish.",
                    image: "http://specialtyproduce.com/sppics/4974.png",
                    color: "yellow",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "pumpkin",
                    description: "vertical ribbing. The rind is smooth and bright yellow, connecting to a straight, rough, and brown-green stem.;",
                    image: "https://www.gardeningknowhow.com/wp-content/uploads/2015/09/edible-pumpkin.jpg",
                    color: "orange",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "green pears",
                    description: "egg-shaped appearance, having a larger spherical lower portion that begins a gradual taper above the mid-point to a narrower rounded top. Their skin color is bright green, and sometimes has a soft red blush",
                    image: "http://specialtyproduce.com/sppics/15907.png",
                    color: "green",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "cucumber",
                    description: ", Asian-style cucumber that produces slender, smooth fruits with a crisp texture. ",
                    image: "https://www.thespruceeats.com/thmb/J3_cjCARljnhkmDk022XbfE_pUY=/2121x1414/filters:fill(auto,1)/GettyImages-941591668-4b2dc5f0ea134f558f9dec3b69377c03.jpg",
                    color: "green",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "eggplant",
                    description: "The fruit is a large egg-shaped berry with a glossy surface that varies in colour from dark purple",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Segmented_aubergine_Thailand.jpg/220px-Segmented_aubergine_Thailand.jpg",
                    color: "purple",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "black currant",
                    description: "Blackcurrant is a berry of translucent pulp with red or green tones and bittersweet taste. ",
                    image: "https://i.pinimg.com/564x/0f/9e/2a/0f9e2a7c00d7dcf500f4de51ccc3c352.jpg",
                    color: "blue",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "carrot",
                    description: "Carrots can be eaten in a variety of ways. Only 3 percent of the β-carotene in raw carrots is released during digestion: this can be improved to 39% by pulping, cooking and adding cooking oil. Alternatively they may be chopped and boiled, fried or steamed, and cooked in soups and stews, as well as baby and pet foods. A well-known dish is carrots julienne. Together with onion and celery, carrots are one of the primary vegetables used in a mirepoix to make various broths.",
                    image: "https://i.pinimg.com/564x/10/6a/89/106a89f4b15f421c493b7568e13c131b.jpg",
                    color: "orange",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Beets",
                    description: "Raw beetroot is 88% water, 10% carbohydrates, 2% protein, and less than 1% fat (see table). In a 100-gram (3+1⁄2-ounce) amount providing 180 kilojoules (43 kilocalories) of food energy, raw beetroot is a rich source (27% of the Daily Value - DV) of folate and a moderate source (16% DV) of manganese, with other nutrients having insignificant content (table).",
                    image: "https://i.pinimg.com/564x/71/21/ca/7121cad9402e394ab2eb43dd28e98c92.jpg",
                    color: "purple",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Purple Cauliflower",
                    description: "Raw cauliflower is 92% water, 5% carbohydrates, 2% protein, and contains negligible fat (table). A 100-gram (3+1⁄2-ounce) reference amount of raw cauliflower provides 104 kilojoules (25 kilocalories) of food energy, and has a high content (20% or more of the Daily Value, DV) of vitamin C (58% DV) and moderate levels of several B vitamins and vitamin K (13–15% DV; table). Contents of dietary minerals are low (7% DV or less).",
                    image: "https://i.pinimg.com/564x/ed/7d/ad/ed7dad4922432a4e95a143e449007c4f.jpg",
                    color: "purple",
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
