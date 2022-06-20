import express from "express";
import User from "../model/userModel";

const router = express.Router();

router.get('/test', (req, res) => {
    res.send({msg: "Test route."});
});

router.get("/all", (req, res) => {
    User.find({}, function(err, users) {
        if (err) {
            res.send(`There was a problem: ${err}`);
        } else {
            res.send(users);
        }
    })
});


export default router