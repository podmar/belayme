import express from "express";
import { getAllUsers, getProfile, getUserByID, getUsersByCurrentLocation, login, register } from "../controller/usersController.js";
import jwtAuth from "../utils/jwtAuth.js";

const router = express.Router();

router.get('/test', (req, res) => {
    res.send({msg: "Test route."});
});

router.get("/all", getAllUsers);

router.get("/", getUsersByCurrentLocation);

router.get("/:_id", getUserByID);

router.post("/register", register);

router.post("/login", login);

router.get("/profile", jwtAuth, getProfile)

export default router