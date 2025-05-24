import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller.js';
// import {protectRoute} from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/login",login);
router.post("/signup",signup);
router.post("/logout",logout);



//middlewares
// router.post("/update-profile", protectRoute, updateProfile);
// router.post("/update-password", protectRoute, updatePassword);

export default router;