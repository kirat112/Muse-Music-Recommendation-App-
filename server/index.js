const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./Routes/AuthRoute.js");
const PORT = process.env.PORT || 3001;

const { AuthMiddleware } = require("./Middlewares/AuthMiddleware.js");

mongoose
  .connect(process.env.MONGODBURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoute);

app.post("/songs", AuthMiddleware, (req, res) => {
  res.send("This is the Auth Route");
});
