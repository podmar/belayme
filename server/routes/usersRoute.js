import express from "express";
import { login, register, getProfile, updateProfile, deleteProfile } from "../controller/usersController.js";

import jwtAuth from "../utils/jwtAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", jwtAuth, getProfile);
router.patch("/profile", jwtAuth, updateProfile);
router.delete("/profile", jwtAuth, deleteProfile);

export default router