const Tracker = require("../models/").tracker;
const {Router} = require("express");
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/",authMiddleware, async (req, res) => {
    const userId = req.user.dataValues.id
    console.log("userId",userId);
    try {
        const track = await Tracker.findByPk(userId)
        res.send(track);
    } catch (e) {
        console.log(e.message);
    }
});

router.post("/", authMiddleware, async (req, res, next) => {
    try {
        const userId = req.user.dataValues.id
        console.log(userId);
        const {day, color} = req.body;
        console.log(day, color);

        if (!day || !color || !userId) {
            res.status(400).send("missing parameters");
        } else {
            const updateTracker = await Tracker.create(
                {
                    day: day,
                    color: color,
                    userId: userId
                });
            res.send(updateTracker);
        }
    } catch (e) {
        next(e);
    }
});
module.exports = router;