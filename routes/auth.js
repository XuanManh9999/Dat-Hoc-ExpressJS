// auth -> phần đăng nhập, đăng ký, quên mật khậu
import express from "express";
import {createAccount, login, changePassword} from "../controllers/authController.js"
const router = express.Router()

router.post("/auth/regiser", createAccount)
router.post("/auth/login", login)
router.put("/auth/change-password", changePassword )


export default router;
