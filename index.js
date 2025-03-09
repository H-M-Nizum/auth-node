const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// App
const app = express();

//
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser);
app.use(express.urlencoded({ extended: true }));

// DB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Hello Node" });
});

// Listener
app.listen(process.env.PORT, () => {
  console.log("Listening....");
});
