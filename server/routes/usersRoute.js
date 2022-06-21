import express from "express";
import { getAllUsers, getUserByID, getUsersByCurrentLocation } from "../controller/usersController.js";
import userModel from "../model/userModel.js";

const router = express.Router();

router.get('/test', (req, res) => {
    res.send({msg: "Test route."});
});

router.get("/all", getAllUsers);

router.get("/", getUsersByCurrentLocation);

router.get("/:_id", getUserByID);

export default router