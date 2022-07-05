const {Router} = require("express");
const {where, Op} = require("sequelize");
const sequelize = require("sequelize");
const {product: Product} = require("../models/");
const Recipes = require("../models/").recipe;

const router = new Router();

router.get("/", async (req, res) => {
    try {
        const recipe = await Recipes.findAll();
        res.send(recipe);
    } catch (e) {
        console.log(e.message);
    }
});

router.get("/:color", async (req, res) => {
    const color = req.params.color
    try {
        const recipe = await Recipes.findAll({
            where: {
                color: {
                    [Op.eq]: color,
                },
            }
        })
        res.send(recipe);
    } catch (e) {
        console.log(e.message);
    }
});
module.exports = router;