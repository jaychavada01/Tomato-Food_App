import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  placeOrder,
  userOrders,
  verifyOrder,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);

export default orderRouter;
