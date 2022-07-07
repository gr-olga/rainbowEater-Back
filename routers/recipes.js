const {Router} = require("express");
const {where, Op} = require("sequelize");
const sequelize = require("sequelize");
const {product: Product} = require("../models/");
const Recipes = require("../models/").recipe;
const Tracker = require("../models/").tracker;

const router = new Router();

router.get("/", async (req, res) => {
    try {
        const recipe = await Recipes.findAll();
        res.send(recipe);
    } catch (e) {
        console.log(e.message);
    }
});


module.exports = router;