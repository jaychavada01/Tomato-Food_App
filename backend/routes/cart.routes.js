import express from "express";
import {
  addToCart,
  removeFromCart,
  fetchUserCartData,
} from "../controllers/cart.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, fetchUserCartData);

export default cartRouter;
