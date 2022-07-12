const {Router} = require("express");
const {Op} = require("sequelize");

const Recipes = require("../models/").recipe;
const Product = require("../models/").product;
const ProductRecipes = require("../models/").productRecipes;


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

router.post("/", async (req, res) => {
    try {
        const {title, description, image, color, product} = req.body;
        if (!title || !image || !color) {
            res.status(400).send("missing parameters");
        } else {
            const newRecipe = await Recipes.create({
                title: title,
                description: description,
                image: image,
                color: color,
            });
            const products = await Product.findOne({
                where: {
                    title: {
                        [Op.eq]: product,
                    },
                }
            })
            if (products) {
                const newProductRecipe = await ProductRecipes.create({
                    productId: products.id,
                    recipeId: newRecipe.id
                })
                console.log(newProductRecipe);
            }
            res.send(newRecipe);
        }
    } catch (e) {
        console.log(e.message);
    }
});


module.exports = router;