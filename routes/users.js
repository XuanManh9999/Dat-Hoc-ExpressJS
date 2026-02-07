import express from "express";

import {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const routerUser = express.Router(); // tạo ra một router con (router sub)

// routerUser.get("/users", verifyToken, getAllUser);

// // localhost:3000/users
// // https://dantri.com.vn/phap-luat.htm
// routerUser.post("/user", verifyToken, createUser);

// routerUser.patch("/user/:username", verifyToken, updateUser);

// routerUser.delete("/user/:username", verifyToken, deleteUser);



routerUser.get("/users", getAllUser);

// localhost:3000/users
// https://dantri.com.vn/phap-luat.htm
routerUser.post("/user", createUser);

routerUser.patch("/user/:username", updateUser);

routerUser.delete("/user/:username", deleteUser);


export default routerUser;
