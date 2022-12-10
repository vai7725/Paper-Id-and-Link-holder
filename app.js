const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

const paper = require("./model");

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.post("/savepaper", (req, res) => {
  console.log(req.body);
  const data = new paper(req.body);
  data
    .save()
    .then(() => {
      res.send("data saved to database");
    })
    .catch((err) => console.log(err));
});

app.listen(port, async () => {
  try {
    mongoose.connect(mongoURI);
    console.log("Server started listening...");
  } catch (error) {}
});
