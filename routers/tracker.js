const Tracker = require("../models/").tracker;
const {Router} = require("express");
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
    const userId = req.user.dataValues.id
    console.log("userId", userId);
    try {
        const track = await Tracker.findAll({where: {userId: userId}})
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
        console.log(day, color, 'here');
        if (!day || !color || !userId) {
            res.status(400).send("missing parameters");
        }
        const tracker = await Tracker.findOne({where: {userId: userId, day: day}})
        if (tracker && tracker.color.length !== 0) {
            const prevTrack = tracker.color.filter((c) => c !== color)
            console.log(prevTrack, "prevTrack");
            const updateTracker = await tracker.update({
                color: [...new Set([...prevTrack, ...color])],
                // color: [...color],
            })
            console.log(updateTracker, "updateTracker");
            res.send(updateTracker);
        } else {
            const createTracker = await Tracker.create(
                {
                    day: day,
                    color: color,
                    userId: userId
                });
            res.send(createTracker);
        }
    } catch (e) {
        next(e);
    }
});
module.exports = router;

