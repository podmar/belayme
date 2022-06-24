import express from "express";
import { getAllUsers, getUserByID, getUsersByCurrentLocation, register } from "../controller/usersController.js";
import userModel from "../model/userModel.js";

const router = express.Router();

router.get('/test', (req, res) => {
    res.send({msg: "Test route."});
});

router.get("/all", getAllUsers);

router.get("/", getUsersByCurrentLocation);

router.get("/:_id", getUserByID);

router.post("/register", register);

export default router