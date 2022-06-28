import express from "express";
import { getAllUsers, getUserByID, getUsersByCurrentLocation, login, register } from "../controller/usersController.js";

const router = express.Router();

router.get('/test', (req, res) => {
    res.send({msg: "Test route."});
});

router.get("/all", getAllUsers);

router.get("/", getUsersByCurrentLocation);

router.get("/:_id", getUserByID);

router.post("/register", register);

router.get("/login", login);

export default router