import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/database.js";
import foodRouter from "./routes/food.route.js";

dotenv.config();

// app config
const app = express();
const PORT = process.env.PORT || 5000;

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);


// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`🌐 Server Started on http://localhost:${PORT}`);
});