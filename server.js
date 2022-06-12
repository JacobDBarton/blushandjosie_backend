///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

///////////////////////////////
// DATABASE CONNECTION
///////////////////////////////
mongoose.connect(MONGODB_URL);

// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    price: String,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

///////////////////////////////
// ROUTES
///////////////////////////////
app.get("/", (req, res) => {
  res.send("Blush & Josie");
});

app.get("/product", async (req, res) => {
  try {
    res.json(await Product.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

app.post("/product", async (req, res) => {
  try {
    res.json(await Product.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    res.json(await Product.findById(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

app.put("/product/:id", async (req, res) => {
  try {
    res.json(await Product.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

app.delete("/product/:id", async (req, res) => {
  try {
    res.json(await Product.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
