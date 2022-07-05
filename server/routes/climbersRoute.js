import express from "express";
import { getClimberByID, getAllClimbers } from "../controller/climbersController.js";

import jwtAuth from "../utils/jwtAuth.js";

const router = express.Router();

router.get("/all", getAllClimbers);
router.get("/id/:_id", getClimberByID);

// router.get("/profile", jwtAuth, getProfile);

export default router