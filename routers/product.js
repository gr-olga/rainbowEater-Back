const {Router} = require("express");
const {where, Op} = require("sequelize");
const Product = require("../models/").product;

const router = new Router();


router.get("/", async (req, res) => {
    try {
        const products = await Product.findAll();
        res.send(products);
    } catch (e) {
        console.log(e.message);
    }
});

router.get("/:color", async (req, res) => {
    const color = req.params.color
    try {
        const products = await Product.findAll({
            where: {
                color: {
                    [Op.eq]: color,
                },
            }
        })
        res.send(products);
    } catch (e) {
        console.log(e.message);
    }
});


module.exports = router;