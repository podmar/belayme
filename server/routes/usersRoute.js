import express from "express";
import { login, register, uploadPhoto, getProfile, updateProfile, deleteProfile } from "../controller/usersController.js";
import { multerUploads } from "../middlewares/multer.js";

import jwtAuth from "../utils/jwtAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", jwtAuth, getProfile);
router.patch("/profile", jwtAuth, updateProfile);
router.delete("/profile", jwtAuth, deleteProfile);
// router.post("/profile/photoUpload", jwtAuth, upoadPhoto);
router.post("/profile/photoUpload", multerUploads.single("image"), uploadPhoto);

export default router;