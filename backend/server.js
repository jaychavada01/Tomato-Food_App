import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./db/database.js";

import foodRouter from "./routes/food.routes.js";
import userRouter from "./routes/user.routes.js";
import cartRouter from "./routes/cart.routes.js";

dotenv.config();

// app config
const app = express();
const PORT = process.env.PORT || 5000;

// db connection
connectDB();

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`🌐 Server Started on http://localhost:${PORT}`);
});
