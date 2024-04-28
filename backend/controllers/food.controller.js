import foodModel from "../models/food.model.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added Successfully!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in addFood controller!" });
  }
};

export { addFood };
