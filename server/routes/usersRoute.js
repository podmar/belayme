import express from "express";
import { getProfile, login, register } from "../controller/usersController.js";

import jwtAuth from "../utils/jwtAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", jwtAuth, getProfile);
// router.patch("/setprofile", jwtAuth, setProfile);

export default router