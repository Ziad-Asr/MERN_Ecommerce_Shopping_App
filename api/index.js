const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`DB is connected`);
  })
  .catch((err) => {
    console.log(err);
    console.log(`DB connection failed`);
  });

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running!`);
});
