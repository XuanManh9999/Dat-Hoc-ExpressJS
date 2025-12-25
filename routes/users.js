import express from "express";
import { getAllUser, createUser } from "../controllers/userController.js";

const routerUser = express.Router(); // tạo ra một router con (router sub)

routerUser.get("/users", getAllUser);

routerUser.post("/user", createUser);

export default routerUser;
