'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "products", [
                {
                    title: "Red Aple",
                    description: "A raw apple is 86% water and 14% carbohydrates, with negligible content of fat and protein (table). A reference serving of a raw apple with skin weighing 100 grams provides 52 calories and a moderate content of dietary fiber.[71] Otherwise, there is low content of micronutrients, with the Daily Values of all falling below 10%",
                    image: "https://i.pinimg.com/564x/d0/f4/a9/d0f4a9dbccb3b79a763e11189b074b8d.jpg",
                    color: "red",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Red cabbage",
                    description: "Cooked red cabbage is 91% water, 7% carbohydrates, 1% protein, and contains negligible fat (table). It has a high content of vitamin C and vitamin K, containing 44% and 72%, respectively, of the Daily Value (DV) per 100-gram amount, and is a moderate source of vitamin B6 (17% DV) (table)",
                    image: "https://i.pinimg.com/564x/8f/0b/63/8f0b63108d3f92ba30a8569eadb20e68.jpg",
                    color: "red",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "orange",
                    description: "Orange flesh is 87% water, 12% carbohydrates, 1% protein, and contains negligible fat (see table). As a 100 gram reference amount, orange flesh provides 47 calories, and is a rich source of vitamin C, providing 64% of the Daily Value. No other micronutrients are present in significant amounts",
                    image: "https://i.pinimg.com/564x/00/69/33/0069332fa51e45dbb8a57a9883574b0b.jpg",
                    color: "orange",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "banana",
                    description: "Raw bananas (not including the peel) are 75% water, 23% carbohydrates, 1% protein, and contain negligible fat. A 100-gram reference serving supplies 89 Calories, 31% of the US recommended Daily Value (DV) of vitamin B6, and moderate amounts of vitamin C, manganese and dietary fiber, with no other micronutrients in significant content",
                    image: "https://i.pinimg.com/564x/6b/11/e9/6b11e9d088c19ba78390df8f09c04dc0.jpg",
                    color: "yellow",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "green peas",
                    description: "Raw pear is 84% water, 15% carbohydrates and contains negligible protein and fat (table). In a 100 g (3+1⁄2 oz) reference amount, raw pear supplies 239 kilojoules (57 kilocalories) of food energy, a moderate amount of dietary fiber, and no other essential nutrients in significant amounts",
                    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Peas_in_pods_-_Studio.jpg",
                    color: "green",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "figs",
                    description: "Figs can be eaten fresh or dried, and used in jam-making. Most commercial production is in dried or otherwise processed forms, since the ripe fruit does not transport well, and once picked does not keep well. The widely produced fig roll is a biscuit (or cookie) with a filling made from figs. Raw figs are 79% water, 19% carbohydrates, 1% protein, and contain negligible fat, 74 kcal of food energy per 100-gram serving",
                    image: "https://i.pinimg.com/564x/0f/9e/2a/0f9e2a7c00d7dcf500f4de51ccc3c352.jpg",
                    color: "purple",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "blueberries",
                    description: "Blueberries consist of 14% carbohydrates, 0.7% protein, 0.3% fat and 84% water (table). They contain only negligible amounts of micronutrients, with moderate levels (relative to respective Daily Values) (DV) of the essential dietary mineral manganese, vitamin C, vitamin K and dietary fiber (table). Generally, nutrient contents of blueberries are a low percentage of the DV (table). A 100 gram serving provides a relatively low caloric value of 57 kcal with a glycemic load of 6.",
                    image: "https://i.pinimg.com/564x/66/42/28/664228e6dd5ca296a86607dab4f1edbd.jpg",
                    color: "blue",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },

////////////////////////
                {
                    title: "Tomatoes",
                    description: "A tomato is 95% water, contains 4% carbohydrates and less than 1% each of fat and protein (table). 100 g of raw tomatoes supply 18 kilocalories and are a moderate source of vitamin C (17% of the Daily Value), but otherwise have no significant nutrient content (table).",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
                    color: "red",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Yellow tomatoes",
                    description: "A tomato is 95% water, contains 4% carbohydrates and less than 1% each of fat and protein",
                    image: "http://specialtyproduce.com/sppics/4974.png",
                    color: "yellow",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "pumpkin",
                    description: "In a 100-gram (3.5 oz) amount, raw pumpkin provides 110 kilojoules (26 kilocalories) of food energy and is an excellent source (20% or more the Daily Value, DV) of provitamin A beta-carotene and vitamin A (53% DV) (table). Vitamin C is present in moderate content (11% DV), but no other nutrients are in significant amounts (less than 10% DV, table). Pumpkin is 92% water, 6.5% carbohydrate, 0.1% fat and 1% protein",
                    image: "https://www.gardeningknowhow.com/wp-content/uploads/2015/09/edible-pumpkin.jpg",
                    color: "orange",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "green pears",
                    description: "Peas, like many legumes, contain symbiotic bacteria called Rhizobia within root nodules of their root systems. These bacteria have the special ability to fix nitrogen from atmospheric, molecular nitrogen (N2) into ammonia (NH3)",
                    image: "http://specialtyproduce.com/sppics/15907.png",
                    color: "green",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "cucumber",
                    description: "Raw cucumber (with peel) is 95% water, 4% carbohydrates, 1% protein, and contains negligible fat. A 100-gram (3+1⁄2-ounce) reference serving provides 67 kilojoules (16 kilocalories) of food energy. It has a low content of micronutrients: it is notable only for vitamin K, at 16% of the Daily Value",
                    image: "https://www.thespruceeats.com/thmb/J3_cjCARljnhkmDk022XbfE_pUY=/2121x1414/filters:fill(auto,1)/GettyImages-941591668-4b2dc5f0ea134f558f9dec3b69377c03.jpg",
                    color: "green",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "eggplant",
                    description: "Raw eggplant is 92% water, 6% carbohydrates, 1% protein, and has negligible fat (table). It provides low amounts of essential nutrients, with only manganese having a moderate percentage (11%) of the Daily Value. Minor changes in nutrient composition occur with season, environment of cultivation (open field or greenhouse), and genotype",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Segmented_aubergine_Thailand.jpg/220px-Segmented_aubergine_Thailand.jpg",
                    color: "purple",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "black currant",
                    description: "Raw blackcurrants are 82% water, 15% carbohydrates, 1% protein and 0.4% fat (table). Per 100 g serving providing 63 kilocalories, the raw fruit has high vitamin C content (218% of the Daily Value, DV) and moderate levels of iron and manganese (12% DV each). Other nutrients are present in negligible amounts. ",
                    image: "https://i.pinimg.com/564x/0c/ad/83/0cad83a8ff65f8a1ff78d99398949c90.jpg",
                    color: "blue",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "carrot",
                    description: "Raw carrots are 88% water, 9% carbohydrates, 0.9% protein, 2.8% dietary fiber, 1% ash and 0.2% fat.[72] Carrot dietary fiber comprises mostly cellulose, with smaller proportions of hemicellulose, lignin and starch.[68] Free sugars in carrot include sucrose, glucose, and fructose",
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
                {
                    title: "Kiwifruit",
                    description: "In a 100-gram (3.5 oz) amount, green kiwifruit provides 255 kilojoules (61 kilocalories) of food energy, is 83% water and 15% carbohydrates, with negligible protein and fat (table). It is particularly rich in vitamin C (112% DV) and vitamin K (38% DV), has a moderate content of vitamin E (10% DV), with no other micronutrients in significant content. Gold kiwifruit has similar nutritional value, but higher vitamin C content, (194% DV,",
                    image: "https://i.pinimg.com/564x/f6/78/9e/f6789e09cf6455a4bd6430082eedb61b.jpg",
                    color: "green",
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
