import express from "express";
import { login, logout, register, updateProfile } from "../Controllers/user.control.js";
import isAuthenticated from "../Middlewares/isAuthenticated.js";
import { singleUpload } from "../Middlewares/mutler.js";
 
const router = express.Router();

router.route("/register").post(singleUpload,register);


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);
export default router;