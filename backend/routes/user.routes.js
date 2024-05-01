import express from "express";
import { loginUser, signUpUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", signUpUser);
userRouter.post("/login", loginUser);

export default userRouter;