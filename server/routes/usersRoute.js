import express from "express";
import userModel from "../model/userModel.js";

const router = express.Router();

router.get('/test', (req, res) => {
    res.send({msg: "Test route."});
});

router.get("/all", (req, res) => {
    userModel.find({}, function(err, users) {
        if (err) {
            res.send(`There was a problem: ${err}`);
        } else {
            res.status(200)
            res.send(users);
        }
    })
});


export default router