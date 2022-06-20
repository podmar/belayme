import express from "express";
import { getAllUsers } from "../controller/usersController.js";
import userModel from "../model/userModel.js";

const router = express.Router();

router.get('/test', (req, res) => {
    res.send({msg: "Test route."});
});

router.get("/all", getAllUsers);

export default router