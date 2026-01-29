import express from "express";
import {verifyToken} from "../md/verify_jwt.js"

import {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const routerUser = express.Router(); // tạo ra một router con (router sub)

routerUser.get("/users", verifyToken, getAllUser);

// localhost:3000/users
// https://dantri.com.vn/phap-luat.htm
routerUser.post("/user", verifyToken, createUser);

routerUser.patch("/user/:username", verifyToken, updateUser);

routerUser.delete("/user/:username", verifyToken, deleteUser);
export default routerUser;
