const {Router} = require("express");

const Recipes = require("../models/").recipe;
const Product = require("../models/").product;


const router = new Router();

router.get("/", async (req, res) => {
    try {
        const recipe = await Recipes.findAll();
        res.send(recipe);
    } catch (e) {
        console.log(e.message);
    }
});


router.get("/:id", async (req, res) => {
    try {
        const prodId = req.params.id;
        const oneProd = await Product.findByPk(prodId, {
            include: [{
                model: Recipes,
                attributes: ['id', 'title', 'description', 'image', 'color'],
                through: {attributes: ["productId", "recipeId"],}
            }]
        });
        if (!oneProd) {
            return res.status(404).send("Product not found");
        }
        res.send(oneProd);
    } catch (e) {
        console.log(e.message);
    }
});


module.exports = router;